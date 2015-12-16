var UsersWidget_1 = require("./UsersWidget");
var UserTypesWidget_1 = require("./UserTypesWidget");
var core_1 = require("angular2/core");
var UsersWidget_2 = require("./UsersWidget");
exports.UsersWidget = UsersWidget_2.UsersWidget;
var UserTypesWidget_2 = require("./UserTypesWidget");
exports.UserTypesWidget = UserTypesWidget_2.UserTypesWidget;
exports.WIDGET_PROVIDERS = [
    new core_1.Provider(UsersWidget_1.UsersWidget, { useClass: UsersWidget_1.UsersWidget }),
    new core_1.Provider(UserTypesWidget_1.UserTypesWidget, { useClass: UserTypesWidget_1.UserTypesWidget })
];
//# sourceMappingURL=widgets.js.map