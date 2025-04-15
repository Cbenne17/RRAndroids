const models = require('../models');

const Stats = models.Stats;

// gets the current players game stats page
const gamePage = (req, res) => {
  Stats.StatsModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occured' });
    }

    return res.render('app', { csrfToken: req.csrfToken(), statss: docs });
  });
};

// gets the high score page
const scorePage = (req, res) => {
  Stats.StatsModel.findAll((err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occured' });
    }

    return res.render('app', { csrfToken: req.csrfToken(), scores: docs });
  });
};

// build current stats data
const makeStats = (req, res) => {
  // remove old stats
  Stats.StatsModel.removeByOwner(req.session.account._id, (errr, data) => {
    if (errr || !data) {
      return data;
    }
    return data;
  });


  // prepare to set stats
  const statsData = {
    name: req.session.account.username,
    version: req.body.version,
    exp: req.body.exp,
    profile: req.body.profile,
    hsTotal: req.body.hsTotal,
    hsTotalT1: req.body.hsTotalT1,
    hsTotalT2: req.body.hsTotalT2,
    hsTotalT3: req.body.hsTotalT3,
    hs18: req.body.hs18,
    hs17: req.body.hs17,
    recentVictory: req.body.recentVictory,
    victories: req.body.victories,
    hsVictory: req.body.hsVictory,
    kills: req.body.kills,
    recentDomination: req.body.recentDomination,
    dominations: req.body.dominations,
    dominationsRR: req.body.dominationsRR,
    recentPerfect: req.body.recentPerfect,
    perfects: req.body.perfects,
    destroyed: req.body.destroyed,
    taunts: req.body.taunts,
    teleports: req.body.teleports,
    melee: req.body.melee,
    powerMelee: req.body.powerMelee,
    blasts: req.body.blasts,
    powerBlasts: req.body.powerBlasts,
    blocking: req.body.blocking,
    shielding: req.body.shielding,
    piccoloKill: req.body.piccoloKill,
    vegetaKill: req.body.vegetaKill,
    gohanKill: req.body.gohanKill,
    tienKill: req.body.tienKill,
    krillinKill: req.body.krillinKill,
    lootT1: req.body.lootT1,
    lootT2: req.body.lootT2,
    lootT3: req.body.lootT3,
    lootT4: req.body.lootT4,
    modsT1: req.body.modsT1,
    modsT2: req.body.modsT2,
    modsT3: req.body.modsT3,
    modsT4: req.body.modsT4,
    modsT5: req.body.modsT5,
    powerModule: req.body.powerModule,
    temporalModule: req.body.temporalModule,
    aegisChip: req.body.aegisChip,
    synchronousChip: req.body.synchronousChip,
    mindCircuit: req.body.mindCircuit,
    masteryCircuit: req.body.masteryCircuit,
    dataOfPiccolo: req.body.dataOfPiccolo,
    dataOfVegeta: req.body.dataOfVegeta,
    dataOfGohan: req.body.dataOfGohan,
    dataOfTien: req.body.dataOfTien,
    dataOfKrillin: req.body.dataOfKrillin,
    owner: req.session.account._id,
  };
  
  /* Stats.StatsModel.updateByOwner(req.session.account._id, statsData, (errr, data) => {
    if (errr || !data) {
      return data;
    }
    return data;
  }); */

  // send stats to database
  const newStats = new Stats.StatsModel(statsData);

  const statsPromise = newStats.save();

  statsPromise.then(() => res.json({ redirect: '/game' }));

  statsPromise.catch((err) => {
    console.log(err);
    if (err.code === 11000) {
	  
	  const newStats2 = new Stats.StatsModel(statsData);

	  const statsPromise2 = newStats2.save();

      statsPromise2.then(() => res.json({ redirect: '/game' }));
	  
	  return statsPromise2;
    }

    return res.status(400).json({ error: 'An error occured' });
  });

  return statsPromise;
};

// check stats
const getStatss = (request, response) => {
  const req = request;
  const res = response;

  return Stats.StatsModel.findByOwner(req.session.account._id, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occured' });
    }

    return res.json({ statss: docs });
  });
};

// check scores
const getScores = (request, response) => {
  const res = response;

  return Stats.StatsModel.findAll((err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occured' });
    }

    return res.json({ scores: docs });
  });
};

// get high score list data
const getHighScores = (request, response) => {
  const req = request;
  const res = response;

  return Stats.StatsModel.findByScore(req.body.search, (err, docs) => {
    if (err) {
      console.log(err);
      return res.status(400).json({ error: 'An error occured' });
    }

    return res.json({ scores: docs });
  });
};

// exports
module.exports.gamePage = gamePage;
module.exports.scorePage = scorePage;
module.exports.getStatss = getStatss;
module.exports.getScores = getScores;
module.exports.getHighScores = getHighScores;
module.exports.make = makeStats;

