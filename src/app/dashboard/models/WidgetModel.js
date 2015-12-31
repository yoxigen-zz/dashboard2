var WidgetViewModel_1 = require('./WidgetViewModel');
var utils_1 = require('../services/utils');
var Rx_1 = require('rxjs/Rx');
var WidgetModel = (function () {
    function WidgetModel(http, dataSources, config) {
        var _this = this;
        this.http = http;
        this.dataSources = dataSources;
        this.views = Object.freeze([]);
        if (config) {
            this.id = config.id;
            this.title = config.title;
            this.dataSource = dataSources.getDataSourceById(config.dataSource);
            if (config.views)
                this.views = Object.freeze(utils_1.Utils.Objects.toObjectArray(config.views, WidgetViewModel_1.WidgetViewModel));
        }
        this.data$ = new Rx_1.Observable(function (observer) { return _this._dataObserver = observer; }).share();
    }
    WidgetModel.prototype.addView = function (view) {
        this.views = Object.freeze(this.views.concat([view]));
    };
    WidgetModel.prototype.removeView = function (view) {
        this.views = utils_1.Utils.Arrays.spliceImmutable(this.views, view);
    };
    /**
     * Refreshes the widget's data
     */
    WidgetModel.prototype.loadData = function () {
        var _this = this;
        if (!this.dataSource)
            return;
        this.http.get("mock_data/data/" + this.dataSource.url).subscribe(function (res) {
            _this.data = Object.freeze(res.json());
            _this._dataObserver && _this._dataObserver.next(_this.data);
            _this.error = null;
        }, function (error) {
            _this.data = null;
            _this.error = {
                text: error.text ? error.text() : error.toString(),
                status: error.status
            };
        });
        this.lastUpdateTime = new Date;
    };
    WidgetModel.prototype.setDataSource = function (dataSourceId) {
        return this.dataSource = this.dataSources.getDataSourceById(dataSourceId);
    };
    return WidgetModel;
})();
exports.WidgetModel = WidgetModel;
//# sourceMappingURL=WidgetModel.js.map