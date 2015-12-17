var DashboardModel = (function () {
    function DashboardModel(dashboardConfig, widgetsService) {
        this.disabled = false;
        this.id = dashboardConfig.id;
        this.title = dashboardConfig.title;
        this.widgets = [];
        var self = this;
        var widgetLoadPromises = dashboardConfig.widgets.map(function (widgetConfig, index) {
            return widgetsService.getWidgetById(widgetConfig.id).then(function (widget) {
                if (!widget)
                    throw ("Widget '" + widgetConfig.id + "' not found.");
                self.widgets.splice(index, 0, widget);
                return widget;
            });
        });
        this.loadingWidgetsPromise = Promise.all(widgetLoadPromises);
    }
    DashboardModel.prototype.refresh = function () {
        var _this = this;
        if (this.disabled)
            return;
        this.disabled = true;
        setTimeout(function () {
            _this.disabled = false;
        }, 2000);
        this.loadWidgetsData();
    };
    DashboardModel.prototype.loadWidgetsData = function () {
        this.loadingWidgetsPromise.then(function (widgets) {
            widgets.forEach(function (widget) {
                widget.loadData();
            });
        });
    };
    return DashboardModel;
})();
exports.DashboardModel = DashboardModel;
//# sourceMappingURL=DashboardModel.js.map