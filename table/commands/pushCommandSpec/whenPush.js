var when = require('a').when;
var c = {};

when(c)
	.it('should push command to changeSet').assertDoesNotThrow(c.changeSet.push.verify)