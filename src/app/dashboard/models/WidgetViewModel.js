var WidgetViewTypesService_1 = require('../services/WidgetViewTypesService');
var WidgetViewModel = (function () {
    function WidgetViewModel(config) {
        this.type = WidgetViewTypesService_1.WidgetViewTypesService.getWidgetViewTypeById(config.type);
        this.settings = config.settings;
        Object.seal(this);
    }
    return WidgetViewModel;
})();
exports.WidgetViewModel = WidgetViewModel;
//# sourceMappingURL=WidgetViewModel.js.map