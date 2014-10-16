var when = require('a').when;
var c = {};

when(c)
    .it('should attach db client to domain').assertStrictEqual(c.client, c.domain.dbClient)
    .it('should attach done callback to domain').assertStrictEqual(c.done, c.domain.dbClientDone)
    .it('should attach rdb to domain').assertOk(c.domain.rdb)
    .it('should attach set rdb.encodeBuffer').assertEqual(c.encodeBuffer, c.domain.rdb.encodeBuffer)
    .it('should attach set rdb.deleteFromSql').assertEqual(c.deleteFromSql, c.domain.rdb.deleteFromSql)
    .it('should invoke success callback').assertDoesNotThrow(c.onSuccess.verify)
    .it('should set wrappedQuery').assertEqual(c.wrappedQuery, c.client.executeQuery)