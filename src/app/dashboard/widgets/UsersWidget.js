var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var WidgetsService_1 = require("../services/WidgetsService");
var core_1 = require("angular2/core");
var UsersWidget = (function () {
    function UsersWidget(widgetsService) {
        widgetsService.registerWidget({
            "id": "users",
            "title": "Users",
            "dataSource": "users.json",
            "views": [
                {
                    "type": "table",
                    "settings": {
                        "fields": [
                            {
                                "id": "id",
                                "name": "ID"
                            },
                            {
                                "id": "name",
                                "name": "Name"
                            },
                            {
                                "id": "age",
                                "name": "Age"
                            }
                        ]
                    }
                }
            ]
        });
    }
    UsersWidget = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [WidgetsService_1.WidgetsService])
    ], UsersWidget);
    return UsersWidget;
})();
exports.UsersWidget = UsersWidget;
//# sourceMappingURL=UsersWidget.js.map