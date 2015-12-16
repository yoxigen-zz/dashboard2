var WidgetViewTypeModel_1 = require('../models/WidgetViewTypeModel');
var utils_1 = require('./utils');
var WidgetViewTypesService;
(function (WidgetViewTypesService) {
    var types = utils_1.Utils.Objects.toObjectArray([
        {
            "id": "table",
            "name": "Table"
        },
        {
            "id": "pie",
            "name": "Pie Chart"
        }
    ], WidgetViewTypeModel_1.WidgetViewTypeModel);
    var typesMap = utils_1.Utils.Arrays.toMap(types, "id");
    function getWidgetViewTypeById(viewTypeId) {
        var type = typesMap.get(viewTypeId);
        if (!type)
            throw new Error("Unknown widget view type, '" + viewTypeId + "'.");
        return type;
    }
    WidgetViewTypesService.getWidgetViewTypeById = getWidgetViewTypeById;
})(WidgetViewTypesService = exports.WidgetViewTypesService || (exports.WidgetViewTypesService = {}));
//# sourceMappingURL=WidgetViewTypesService.js.map