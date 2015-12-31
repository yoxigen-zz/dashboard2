import {PropertyType} from "./PropertyType";
export interface WidgetViewSettingDescription{
	id?:string;
	name:string;
	type?:PropertyType;
	options?: Array<{ id:string, name:string }>;
	list?: {
		itemType?: string,
		fields?: Array<WidgetViewSettingDescription>
	}
	required?:boolean;
	fromDataSource?:boolean;
}