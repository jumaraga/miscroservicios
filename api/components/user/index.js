const store = require('../../../database/dummy')
const ctrl = require('./controller');

module.exports = ctrl(store);