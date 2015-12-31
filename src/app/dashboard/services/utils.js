var Utils;
(function (Utils) {
    var Arrays;
    (function (Arrays) {
        function toMap(items, key) {
            if (!key)
                key = "id";
            var map = new Map();
            items.forEach(function (item) {
                map.set(item[key], item);
            });
            return map;
        }
        Arrays.toMap = toMap;
        function spliceImmutable(items, item) {
            var itemIndex = items.indexOf(item);
            if (~itemIndex) {
                var itemsBefore = items.slice(0, itemIndex), itemsAfter = items.slice(itemIndex + 1);
                return itemsBefore.concat(itemsAfter);
            }
            return null;
        }
        Arrays.spliceImmutable = spliceImmutable;
    })(Arrays = Utils.Arrays || (Utils.Arrays = {}));
    var Objects;
    (function (Objects) {
        function toObjectArray(items, constructor) {
            return items.map(function (item) {
                return new constructor(item);
            });
        }
        Objects.toObjectArray = toObjectArray;
    })(Objects = Utils.Objects || (Utils.Objects = {}));
})(Utils = exports.Utils || (exports.Utils = {}));
//# sourceMappingURL=utils.js.map