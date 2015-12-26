export interface WidgetViewSettingDescription{
	id?:string;
	name:string;
	type?:string;
	options?: Array<{ id:string, name:string }>;
	list?: {
		itemType?: string,
		fields?: Array<WidgetViewSettingDescription>
	}
	required?:boolean;
}