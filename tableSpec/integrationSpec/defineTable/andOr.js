function act(c) {
	c.expected = "select _0.oOrderId,_0.oCustomerId from order _0 where _0.oOrderId=2 AND (_0.oOrderId=3 OR _0.oOrderId=4) AND _0.discriminatorColumn='foo' AND _0.discriminatorColumn2='baz'";
	var filter = c.orderTable.id.eq(2);
	var filter2 = c.orderTable.id.eq(3);
	var filter3 = c.orderTable.id.eq(4);
	c.filter = filter.and(filter2.or(filter3));
	c.newQuery();
	
}

module.exports = act;