var core_1 = require("angular2/core");
var DashboardFactory_1 = require("./services/DashboardFactory");
var DashboardsService_1 = require("./services/DashboardsService");
var WidgetFactory_1 = require("./services/WidgetFactory");
var WidgetsService_1 = require("./services/WidgetsService");
var DashboardFactory_2 = require("./services/DashboardFactory");
exports.DashboardFactory = DashboardFactory_2.DashboardFactory;
var DashboardsService_2 = require("./services/DashboardsService");
exports.DashboardsService = DashboardsService_2.DashboardsService;
var WidgetFactory_2 = require("./services/WidgetFactory");
exports.WidgetFactory = WidgetFactory_2.WidgetFactory;
var WidgetsService_2 = require("./services/WidgetsService");
exports.WidgetsService = WidgetsService_2.WidgetsService;
var WidgetViewTypesService_1 = require('./services/WidgetViewTypesService');
exports.WidgetViewTypesService = WidgetViewTypesService_1.WidgetViewTypesService;
exports.DASHBOARD_PROVIDERS = [
    new core_1.Provider(DashboardFactory_1.DashboardFactory, { useClass: DashboardFactory_1.DashboardFactory }),
    new core_1.Provider(DashboardsService_1.DashboardsService, { useClass: DashboardsService_1.DashboardsService }),
    new core_1.Provider(WidgetFactory_1.WidgetFactory, { useClass: WidgetFactory_1.WidgetFactory }),
    new core_1.Provider(WidgetsService_1.WidgetsService, { useClass: WidgetsService_1.WidgetsService })
];
//# sourceMappingURL=dashboard.js.map