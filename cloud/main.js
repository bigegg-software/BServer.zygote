const  classLevel = require('./classLevel')
Parse.Cloud.define('ping', async (req) => {
  return 'pong';
})
