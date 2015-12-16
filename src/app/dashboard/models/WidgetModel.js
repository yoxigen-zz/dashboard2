var WidgetViewModel_1 = require('./WidgetViewModel');
var utils_1 = require('../services/utils');
var WidgetModel = (function () {
    function WidgetModel(config, http) {
        this.id = config.id;
        this.title = config.title;
        this.dataSource = config.dataSource;
        this.http = http;
        if (config.views)
            this.views = utils_1.Utils.Objects.toObjectArray(config.views, WidgetViewModel_1.WidgetViewModel);
    }
    /**
     * Refreshes the widget's data
     */
    WidgetModel.prototype.loadData = function () {
        var _this = this;
        if (!this.dataSource)
            return;
        this.http.get("mock_data/data/" + this.dataSource).subscribe(function (res) {
            _this.data = Object.freeze(res.json());
        });
        this.lastUpdateTime = new Date;
    };
    return WidgetModel;
})();
exports.WidgetModel = WidgetModel;
//# sourceMappingURL=WidgetModel.js.map