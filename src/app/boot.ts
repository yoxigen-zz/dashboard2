import {HashLocationStrategy, LocationStrategy, ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {provide} from "angular2/core";
import {DASHBOARD_PROVIDERS, WIDGET_PROVIDERS} from "./dashboard/dashboard";
import {AppComponent} from "./app";
import {bootstrap} from "angular2/platform/browser";

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
	ROUTER_PROVIDERS,
	DASHBOARD_PROVIDERS,
	WIDGET_PROVIDERS,
	provide(LocationStrategy, { useClass: HashLocationStrategy })
]);