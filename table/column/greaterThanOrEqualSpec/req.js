var amock = require('a');
var requireMock = amock.requireMock;
var newBoolean = requireMock('./newBoolean');

function act(c) {
	c.newBoolean = newBoolean;
	c.mock = amock.mock;
	c.column = {};
	c.column._dbName = 'columnName';
	c.sut = require('../greaterThanOrEqual');
}

module.exports = act;