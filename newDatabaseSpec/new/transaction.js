function act(c){
	c.expected = {};
	c.resolveTransaction = {};
	c.transactionPromise = {};
	c.domain = {};
	c.Domain.create.expect().return(c.domain);
	c.newTransaction.expect(c.domain, c.connectionString).return(c.resolveTransaction);
	c.newPromise.expect(c.resolveTransaction).return(c.transactionPromise);

	c.transactionPromise.then = c.mock();
	c.beginPromise = {};
	c.transactionPromise.then.expect(c.begin).return(c.beginPromise);


	c.commitAndRollbackPromise = {};
	c.newPromise.expect(c.commitAndRollback).return(c.commitAndRollbackPromise);

	c.beginPromise.then = c.mock();
	c.beginPromise.then.expect(c.commitAndRollbackPromise).return(c.expected);

	c.returned = c.sut.transaction();

}

module.exports = act;