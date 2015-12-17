import {DashboardFactory} from "./services/DashboardFactory";
import {DashboardsService} from "./services/DashboardsService";
import {WidgetFactory} from "./services/WidgetFactory";
import {WidgetsService} from "./services/WidgetsService";
import {Type} from "angular2/core";

export {DashboardFactory} from "./services/DashboardFactory";
export {DashboardsService} from "./services/DashboardsService";
export {WidgetFactory} from "./services/WidgetFactory";
export {WidgetsService} from "./services/WidgetsService";
export {WidgetViewTypesService} from './services/WidgetViewTypesService';

export {WIDGET_PROVIDERS} from "./widgets/widgets"; // TODO: Remove this!
export {WIDGET_VIEW_PROVIDERS} from "./views/views";

export const DASHBOARD_PROVIDERS:Type[] = [DashboardFactory, DashboardsService, WidgetFactory, WidgetsService];