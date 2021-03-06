var newPg = require('./pg/newDatabase');
var _sqlite;

var connectViaPool = function(connectionString, poolOptions) {
	if (connectionString.indexOf && connectionString.indexOf('mysql') === 0)
		return connectViaPool.mySql.apply(null, arguments);
	return newPg.apply(null, arguments);
};

connectViaPool.pg = newPg;
connectViaPool.mySql = require('./mySql/newDatabase');
connectViaPool.table = require('./table');
connectViaPool.filter = require('./emptyFilter');
connectViaPool.commit = require('./table/commit');
connectViaPool.rollback = require('./table/rollback');
connectViaPool.end = require('./pools').end;
connectViaPool.log = require('./table/log').registerLogger;
connectViaPool.query = require('./query');
connectViaPool.lock = require('./lock');
connectViaPool.schema = require('./pg/schema');

Object.defineProperty(connectViaPool, 'sqlite', {
  get: function () {
  	if (!_sqlite)
  		_sqlite = require('./sqlite/newDatabase');
	return _sqlite; 	 
  }
});

module.exports = connectViaPool;
