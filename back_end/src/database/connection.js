const knex = require('knex');
const configuration = require('../../knexfile');

const connetction = knex(configuration.development);
module.exports = connetction