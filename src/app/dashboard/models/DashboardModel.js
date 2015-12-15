var DashboardModel = (function () {
    function DashboardModel(dashboardConfig, widgetsService) {
        this.disabled = false;
        this.id = dashboardConfig.id;
        this.title = dashboardConfig.title;
        this.widgets = dashboardConfig.widgets ? dashboardConfig.widgets.map(function (widgetConfig) {
            var widget = widgetsService.getWidgetById(widgetConfig.id);
            if (!widget)
                throw ("Widget '" + widgetConfig.id + "' not found.");
            return widget;
        }) : [];
    }
    DashboardModel.prototype.refresh = function () {
        var _this = this;
        if (this.disabled)
            return;
        this.disabled = true;
        setTimeout(function () {
            _this.disabled = false;
        }, 2000);
        this.widgets.forEach(function (widget) {
            widget.loadData();
        });
    };
    return DashboardModel;
})();
exports.DashboardModel = DashboardModel;
//# sourceMappingURL=DashboardModel.js.map