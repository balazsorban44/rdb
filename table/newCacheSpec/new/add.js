function act(c){	
	c.result = 'foo';
	c.cachedValue = {};
	c.cachedValue2 = {};		
	c.sut.tryAdd([c.cachedValue, c.cachedValue2], c.result);
}

module.exports = act;