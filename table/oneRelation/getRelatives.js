var legToQuery = require('../query/addSubQueries/manyLegToQuery');
var getRelativesCore = require('../getRelativesCore');

module.exports = getRelativesCore.bind(null, legToQuery);