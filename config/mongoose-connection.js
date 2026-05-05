const mongoose = require('mongoose');
const dbgr = require('debug')('app:mongoose');
const config = require('config'); 
//const config = require('./development.json'); //same same but different

mongoose
  .connect(`${config.get("MONGODB_URI")}/scatch`)
  // .connect(`${config.MONGODB_URI}/scatch`) //same same but different
  .then(function () {
    // console.log("connected");
    dbgr("connected");
  })
  .catch(function (err) {
    console.log(err);
    dbgr("error connecting to MongoDB");
  });

  module.exports = mongoose.connection; //scatch database er whole connection export kore dilam, jate onno file e import kore use korte pari


