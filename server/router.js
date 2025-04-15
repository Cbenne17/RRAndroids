const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/getToken', mid.requiresSecure, controllers.Account.getToken);
  app.get('/getStatss', mid.requiresLogin, controllers.Stats.getStatss);
  app.get('/getScores', mid.requiresLogin, controllers.Stats.getScores);
  app.get('/getHighScores', mid.requiresLogin, controllers.Stats.getHighScores);
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.get('/passwordChange', mid.requiresSecure,
    mid.requiresLogin, controllers.Account.passwordPage);
  app.post('/passwordChange', mid.requiresSecure,
    mid.requiresLogin, controllers.Account.passwordChange);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);
  app.get('/game', mid.requiresLogin, controllers.Stats.gamePage);
  app.get('/scores', mid.requiresLogin, controllers.Stats.scorePage);
  app.post('/game', mid.requiresLogin, controllers.Stats.make);
  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;
