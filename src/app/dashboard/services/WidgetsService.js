var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var WidgetFactory_1 = require("./WidgetFactory");
var WidgetsService = (function () {
    function WidgetsService(widgetFactory) {
        this.widgets = new Map();
        this.widgetFactory = widgetFactory;
    }
    WidgetsService.prototype.registerWidget = function (widgetConfig) {
        var model = this.widgetFactory.createWidget(widgetConfig);
        if (this.widgets.has(widgetConfig.id))
            throw new Error("Widget with ID '" + widgetConfig.id + "' already exists.");
        this.widgets.set(widgetConfig.id, model);
        return model;
    };
    WidgetsService.prototype.getWidgetById = function (widgetId) {
        return this.widgets.get(widgetId);
    };
    WidgetsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [WidgetFactory_1.WidgetFactory])
    ], WidgetsService);
    return WidgetsService;
})();
exports.WidgetsService = WidgetsService;
//# sourceMappingURL=WidgetsService.js.map