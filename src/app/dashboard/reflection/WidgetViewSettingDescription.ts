export interface WidgetViewSettingDescription{
	name:string;
	type?:string;
	list?: {
		itemType?: string,
		fields?: Array<WidgetViewSettingDescription>
	}
}