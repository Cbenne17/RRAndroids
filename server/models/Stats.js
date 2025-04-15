const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const _ = require('underscore');

let StatsModel = {};

// mongoose.Types.ObjectID is a function that
// converts string ID to real mongo ID
const convertId = mongoose.Types.ObjectId;
const setName = (name) => _.escape(name).trim();

// schematic for stats data in mongo
const StatsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: 'Test',
    trim: true,
    unique: true,
    set: setName,
  },

  version: {
    type: Number,
    min: 1,
    default: 1,
  },

  exp: {
    type: Number,
    min: 0,
    default: 0,
  },

  profile: {
    type: String,
    default: 'https://media.giphy.com/media/RbI2UL5r9Aufm/giphy.gif',
    trim: true,
  },

  hsTotal: {
    type: Number,
    min: 0,
    default: 0,
  },

  hsTotalT1: {
    type: Number,
    min: 0,
    default: 0,
  },

  hsTotalT2: {
    type: Number,
    min: 0,
    default: 0,
  },

  hsTotalT3: {
    type: Number,
    min: 0,
    default: 0,
  },

  hs18: {
    type: Number,
    min: 0,
    default: 0,
  },

  hs17: {
    type: Number,
    min: 0,
    default: 0,
  },

  recentVictory: {
    type: Boolean,
    default: false,
  },

  victories: {
    type: Number,
    min: 0,
    default: 0,
  },

  hsVictory: {
    type: Number,
    min: 0,
    default: 0,
  },

  kills: {
    type: Number,
    min: 0,
    default: 0,
  },

  recentDomination: {
    type: Boolean,
    default: false,
  },

  dominations: {
    type: Number,
    min: 0,
    default: 0,
  },

  dominationsRR: {
    type: Number,
    min: 0,
    default: 0,
  },

  recentPerfect: {
    type: Boolean,
    default: false,
  },

  perfects: {
    type: Number,
    min: 0,
    default: 0,
  },

  destroyed: {
    type: Number,
    min: 0,
    default: 0,
  },

  taunts: {
    type: Number,
    min: 0,
    default: 0,
  },

  teleports: {
    type: Number,
    min: 0,
    default: 0,
  },

  melee: {
    type: Number,
    min: 0,
    default: 0,
  },

  powerMelee: {
    type: Number,
    min: 0,
    default: 0,
  },


  blasts: {
    type: Number,
    min: 0,
    default: 0,
  },

  powerBlasts: {
    type: Number,
    min: 0,
    default: 0,
  },

  blocking: {
    type: Number,
    min: 0,
    default: 0,
  },

  shielding: {
    type: Number,
    min: 0,
    default: 0,
  },

  piccoloKill: {
    type: Number,
    min: 0,
    default: 0,
  },

  vegetaKill: {
    type: Number,
    min: 0,
    default: 0,
  },

  gohanKill: {
    type: Number,
    min: 0,
    default: 0,
  },

  tienKill: {
    type: Number,
    min: 0,
    default: 0,
  },

  krillinKill: {
    type: Number,
    min: 0,
    default: 0,
  },

  lootT1: {
    type: Number,
    min: 0,
    default: 0,
  },

  lootT2: {
    type: Number,
    min: 0,
    default: 0,
  },

  lootT3: {
    type: Number,
    min: 0,
    default: 0,
  },

  lootT4: {
    type: Number,
    min: 0,
    default: 0,
  },

  modsT1: {
    type: String,
    default: '',
    trim: true,
  },

  modsT2: {
    type: String,
    default: '',
    trim: true,
  },

  modsT3: {
    type: String,
    default: '',
    trim: true,
  },

  modsT4: {
    type: String,
    default: '',
    trim: true,
  },

  modsT5: {
    type: String,
    default: '',
    trim: true,
  },

  powerModule: {
    type: Boolean,
    default: false,
  },

  temporalModule: {
    type: Boolean,
    default: false,
  },

  aegisChip: {
    type: Boolean,
    default: false,
  },

  synchronousChip: {
    type: Boolean,
    default: false,
  },

  mindCircuit: {
    type: Boolean,
    default: false,
  },

  masteryCircuit: {
    type: Boolean,
    default: false,
  },

  dataOfPiccolo: {
    type: Boolean,
    default: false,
  },

  dataOfVegeta: {
    type: Boolean,
    default: false,
  },

  dataOfGohan: {
    type: Boolean,
    default: false,
  },

  dataOfTien: {
    type: Boolean,
    default: false,
  },

  dataOfKrillin: {
    type: Boolean,
    default: false,
  },

  owner: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'Account',
  },

  createdData: {
    type: Date,
    default: Date.now,
  },
});

StatsSchema.statics.toAPI = (doc) => ({
  name: doc.name,
  version: doc.version,
  exp: doc.exp,
  profile: doc.profile,
  hsTotal: doc.hsTotal,
  hsTotalT1: doc.hsTotalT1,
  hsTotalT2: doc.hsTotalT2,
  hsTotalT3: doc.hsTotalT3,
  hs18: doc.hs18,
  hs17: doc.hs17,
  recentVictory: doc.recentVictory,
  victories: doc.victories,
  hsVictory: doc.hsVictory,
  kills: doc.kills,
  recentDomination: doc.recentDomination,
  dominations: doc.dominations,
  dominationsRR: doc.dominationsRR,
  recentPerfect: doc.recentPerfect,
  perfects: doc.perfects,
  destroyed: doc.destroyed,
  taunts: doc.taunts,
  teleports: doc.teleports,
  melee: doc.melee,
  powerMelee: doc.powerMelee,
  blasts: doc.blasts,
  powerBlasts: doc.powerBlasts,
  blocking: doc.blocking,
  shielding: doc.shielding,
  piccoloKill: doc.piccoloKill,
  vegetaKill: doc.vegetaKill,
  gohanKill: doc.gohanKill,
  tienKill: doc.tienKill,
  krillinKill: doc.krillinKill,
  lootT1: doc.lootT1,
  lootT2: doc.lootT2,
  lootT3: doc.lootT3,
  lootT4: doc.lootT4,
  modsT1: doc.modsT1,
  modsT2: doc.modsT2,
  modsT3: doc.modsT3,
  modsT4: doc.modsT4,
  modsT5: doc.modsT5,
  powerModule: doc.powerModule,
  temporalModule: doc.temporalModule,
  aegisChip: doc.aegisChip,
  synchronousChip: doc.synchronousChip,
  mindCircuit: doc.mindCircuit,
  masteryCircuit: doc.masteryCircuit,
  dataOfPiccolo: doc.dataOfPiccolo,
  dataOfVegeta: doc.dataOfVegeta,
  dataOfGohan: doc.dataOfGohan,
  dataOfTien: doc.dataOfTien,
  dataOfKrillin: doc.dataOfKrillin,

});

// Find all stats data for owner
StatsSchema.statics.findByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return StatsModel.find(search).select('').exec(callback);
};

/* StatsSchema.statics.updateByOwner = (ownerId, data, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return StatsModel.findOneAndUpdate(search, data);
}; */


// remove old stats data
StatsSchema.statics.removeByOwner = (ownerId, callback) => {
  const search = {
    owner: convertId(ownerId),
  };

  return StatsModel.deleteMany(search, callback);
};

// find stats based on score
StatsSchema.statics.findByScore = (score, callback) => {
  const search = {
    hsTotal: score,
  };

  return StatsModel.find(search).select('').exec(callback);
};

StatsSchema.statics.findAll = (callback) => StatsModel.find().select('').exec(callback);

StatsModel = mongoose.model('Stats', StatsSchema);


// exports
module.exports.StatsModel = StatsModel;
module.exports.StatsSchema = StatsSchema;
