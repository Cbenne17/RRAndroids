const models = require('../models');

const Account = models.Account;

// handlebars render call for login page
const loginPage = (req, res) => {
  res.render('login', { csrfToken: req.csrfToken() });
};

// handlebars render call for password page
const passwordPage = (req, res) => {
  res.render('passwordChange',
    {
      username: req.session.body.username,
      csrfToken: req.csrfToken(),
    });
};

// drop user session
const logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};

// handle login process
const login = (request, response) => {
  const req = request;
  const res = response;

	// force cast to strings to cover some security flaws
  const username = `${req.body.username}`;
  const password = `${req.body.pass}`;

  if (!username || !password) {
    return res.status(400).json({ error: 'All fields required' });
  }

  return Account.AccountModel.authenticate(username, password, (err, account) => {
    if (err || !account) {
      return res.status(401).json({ error: 'Wrong username or password' });
    }

    req.session.account = Account.AccountModel.toAPI(account);

    return res.json({ redirect: '/game' });
  });
};

// handle signup process
const signup = (request, response) => {
  const req = request;
  const res = response;

	// cast to strings to cover up some security flaws
  req.body.username = `${req.body.username}`;
  req.body.pass = `${req.body.pass}`;
  req.body.pass2 = `${req.body.pass2}`;

  if (!req.body.username || !req.body.pass || !req.body.pass2) {
    return res.status(400).json({ error: 'All fields required' });
  }
  if (req.body.pass !== req.body.pass2) {
    return res.status(400).json({ error: 'Passwords must match' });
  }

  return Account.AccountModel.generateHash(req.body.pass, (salt, hash) => {
    const accountData = {
      username: req.body.username,
      salt,
      password: hash,
    };

    const newAccount = new Account.AccountModel(accountData);

    const savePromise = newAccount.save();

    savePromise.then(() => {
      req.session.account = Account.AccountModel.toAPI(newAccount);
      res.json({ redirect: '/game' });
    });

    savePromise.catch((err) => {
      console.log(err);

      if (err.code === 11000) {
        return res.status(400).json({ error: 'Username already in use.' });
      }

      return res.status(400).json({ error: 'An error occured' });
    });
  });
};

// handle password change process
const passwordChange = (request, response) => {
  const req = request;
  const res = response;

	// cast to strings to cover up some security flaws
  req.body.username = `${req.session.account.username}`;
  req.body.oldPass = `${req.body.oldPass}`;
  req.body.pass = `${req.body.pass}`;
  req.body.pass2 = `${req.body.pass2}`;

  // make sure all data present
  if (!req.body.oldPass || !req.body.pass || !req.body.pass2) {
    return res.status(400).json({ error: 'All fields required' });
  }

  // make sure passwords match
  if (req.body.pass !== req.body.pass2) {
    return res.status(400).json({ error: 'Passwords must match' });
  }

  // check if this is correct user
  return Account.AccountModel.authenticate(req.body.username, req.body.oldPass, (err, account) => {
    if (err || !account) {
      return res.status(401).json({ error: 'Wrong password' });
    }


    return Account.AccountModel.generateHash(req.body.pass, (salt, hash) => {
      const accountData = {
        username: req.body.username,
        salt,
        password: hash,
        _id: req.session.account._id,
      };

      // replace old data
      Account.AccountModel.removeByUsername(req.body.username, (errr, accountt) => {
        if (errr || !accountt) {
          return res.status(401).json({ error: 'Failed to change' });
        }
        return accountt;
      });

      // create new account data with changes
      const newAccount = new Account.AccountModel(accountData);

      const savePromise = newAccount.save();

      savePromise.then(() => {
        req.session.account = Account.AccountModel.toAPI(newAccount);
        res.json({ redirect: '/game' });
      });

      savePromise.catch((errrr) => {
        console.log(errrr);

        if (errrr.code === 11000) {
          return res.status(400).json({ error: 'Username already in use.' });
        }

        return res.status(400).json({ error: 'An error occured' });
      });
    });
  });
};


const getToken = (request, response) => {
  const req = request;
  const res = response;

  const csrfJSON = {
    csrfToken: req.csrfToken(),
  };

  res.json(csrfJSON);
};

module.exports.loginPage = loginPage;
module.exports.passwordPage = passwordPage;
module.exports.login = login;
module.exports.logout = logout;
module.exports.signup = signup;
module.exports.passwordChange = passwordChange;
module.exports.getToken = getToken;
