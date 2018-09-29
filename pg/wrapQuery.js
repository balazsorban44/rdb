var log = require('../table/log');
var replaceParamChar = require('./replaceParamChar');

function wrapQuery(connection) {
	var runOriginalQuery = connection.query;
	return runQuery;

	function runQuery(query, onCompleted) {
		var params = query.parameters;
		var sql = replaceParamChar(query, params);
		log(sql);
		log('parameters: ' + params);

		runOriginalQuery.call(connection, sql, params, onInnerCompleted);

		function onInnerCompleted(err, result) {
			if (err) 
				onCompleted(err);
			else {
				if (Array.isArray(result))
					result = result[result.length-1];
				onCompleted(null, result.rows);
			}
		}
	}

}

module.exports = wrapQuery;