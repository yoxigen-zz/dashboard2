var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var TableViewComponent = (function () {
    function TableViewComponent() {
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], TableViewComponent.prototype, "settings", void 0);
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Array)
    ], TableViewComponent.prototype, "data", void 0);
    TableViewComponent = __decorate([
        angular2_1.Component({
            selector: "table-view",
            inputs: ["data"],
            directives: [angular2_1.NgSwitch, angular2_1.NgSwitchWhen],
            styles: ["\n\t\t.table-view{ width: 100%; border-collapse: collapse; }\n\t\t.table-view th, .table-view td{ padding: .5rem; }\n\t\t.table-view th{ font-weight: strong; text-align: left; }\n\t\t.table-view tbody tr{ border-top: solid 1px rgba(0,0,0,.06); }\n\t\t.table-view td{ color: rgba(0,0,0,.87) }\n\t"],
            template: "\n        <table class=\"table-view\">\n        \t<thead>\n        \t\t<tr>\n        \t\t\t<th *ng-for=\"#field of settings.fields\">{{field.name}}</th>\n        \t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody>\n\t\t\t\t<tr *ng-for=\"#item of data\">\n\t\t\t\t\t<td *ng-for=\"#field of settings.fields\">{{item[field.id]}}</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n        </table>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TableViewComponent);
    return TableViewComponent;
})();
exports.TableViewComponent = TableViewComponent;
//# sourceMappingURL=TableViewComponent.js.map