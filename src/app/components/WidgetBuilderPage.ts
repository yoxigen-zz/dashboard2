import {WidgetBuilderComponent} from "../dashboard_builder/components/WidgetBuilderComponent";
import {Component} from "angular2/core";

@Component({
	selector: "dashboard-page",
	directives: [WidgetBuilderComponent],
	template: `
		<widget-builder></widget-builder>
	`
})
export class WidgetBuilderPage{

}