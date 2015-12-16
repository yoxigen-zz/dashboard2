import {Injectable} from "angular2/core";
import {Provider} from "angular2/core";
import {Injector} from "angular2/core";

import {DashboardFactory} from "./services/DashboardFactory";
import {DashboardsService} from "./services/DashboardsService";
import {WidgetFactory} from "./services/WidgetFactory";
import {WidgetsService} from "./services/WidgetsService";

export {DashboardFactory} from "./services/DashboardFactory";
export {DashboardsService} from "./services/DashboardsService";
export {WidgetFactory} from "./services/WidgetFactory";
export {WidgetsService} from "./services/WidgetsService";
export {WidgetViewTypesService} from './services/WidgetViewTypesService';

export {WIDGET_PROVIDERS} from "./widgets/widgets";

export const DASHBOARD_PROVIDERS:Provider[] = [
	new Provider(DashboardFactory, { useClass: DashboardFactory }),
	new Provider(DashboardsService, { useClass: DashboardsService }),
	new Provider(WidgetFactory, { useClass: WidgetFactory }),
	new Provider(WidgetsService, { useClass: WidgetsService })
];