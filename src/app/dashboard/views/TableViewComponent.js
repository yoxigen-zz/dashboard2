var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var ViewSettingsDecorators_1 = require("../reflection/ViewSettingsDecorators");
var ViewSettingsDecorators_2 = require("../reflection/ViewSettingsDecorators");
var TableViewComponent = (function () {
    function TableViewComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', TableViewComponentSettings)
    ], TableViewComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TableViewComponent.prototype, "data", void 0);
    TableViewComponent = __decorate([
        core_1.Component({
            selector: "table-view",
            inputs: ["data"],
            styles: ["\n\t\t.table-view{ width: 100%; border-collapse: collapse; }\n\t\t.table-view th, .table-view td{ padding: .5rem; }\n\t\t.table-view th{ font-weight: strong; text-align: left; }\n\t\t.table-view tbody tr{ border-top: solid 1px rgba(0,0,0,.06); }\n\t\t.table-view td{ color: rgba(0,0,0,.87) }\n\t"],
            template: "\n        <table class=\"table-view\">\n        \t<thead>\n        \t\t<tr>\n        \t\t\t<th *ngFor=\"#field of settings.fields\">{{field.name}}</th>\n        \t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"#item of data\">\n\t\t\t\t\t<td *ngFor=\"#field of settings.fields\">{{item[field.id]}}</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n        </table>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TableViewComponent);
    return TableViewComponent;
})();
exports.TableViewComponent = TableViewComponent;
var TableField = (function () {
    function TableField() {
    }
    __decorate([
        ViewSettingsDecorators_2.WidgetViewSettingTypeField({ name: "ID", type: "string" }), 
        __metadata('design:type', String)
    ], TableField.prototype, "id", void 0);
    __decorate([
        ViewSettingsDecorators_2.WidgetViewSettingTypeField({ name: "Name", type: "string" }), 
        __metadata('design:type', String)
    ], TableField.prototype, "name", void 0);
    TableField = __decorate([
        ViewSettingsDecorators_1.WidgetViewSettingType({ name: "Field", id: "field" }), 
        __metadata('design:paramtypes', [])
    ], TableField);
    return TableField;
})();
exports.TableField = TableField;
var TableViewComponentSettings = (function () {
    function TableViewComponentSettings() {
    }
    __decorate([
        ViewSettingsDecorators_1.WidgetViewSetting({ name: "Table Fields", list: { itemType: "field" } }), 
        __metadata('design:type', Array)
    ], TableViewComponentSettings.prototype, "fields", void 0);
    TableViewComponentSettings = __decorate([
        ViewSettingsDecorators_1.WidgetViewSettings({ name: "Table", selector: "table-view", id: "table" }), 
        __metadata('design:paramtypes', [])
    ], TableViewComponentSettings);
    return TableViewComponentSettings;
})();
//# sourceMappingURL=TableViewComponent.js.map