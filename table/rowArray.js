var extractStrategy = require('./resultToRows/toDto/extractStrategy');
var resultToPromise = require('./resultToPromise')
var orderBy = require('./rowArray/orderBy');
var negotiateNextTick = require('./rowArray/negotiateNextTick');

function newRowArray(table) {
    var c = [];

    Object.defineProperty(c, "toJSON", {
        enumerable: false,
        value: toJSON
    });

    Object.defineProperty(c, "toDto", {
        enumerable: false,
        writable: true,
        value: toDto
    });

    function toJSON(optionalStrategy) {
        return c.toDto.apply(null, arguments).then(JSON.stringify);
    }

    function toDto(optionalStrategy) {
        var args = arguments;
        var result = [];
        var length = c.length;
        var i = -1;

        return resultToPromise().then(toDtoAtIndex);

        function toDtoAtIndex() {
            i++;
            if (i === length) {
                return orderBy(optionalStrategy, result);
            }
            var row = c[i];
            return getDto()
                    .then(onDto)
                    .then(toDtoAtIndex)

            function getDto() {
                return row.toDto.apply(row,args);
            }            

            function onDto(dto) {
                result.push(dto);
                return negotiateNextTick(i);
            }
        }
    }

    return c;
}

module.exports = newRowArray;
