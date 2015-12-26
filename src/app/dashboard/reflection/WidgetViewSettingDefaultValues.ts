import {WidgetViewSetting} from "./WidgetViewSetting";

export module WidgetViewSettingDefaultValues{
	export function getDefaultSettingValue(setting:WidgetViewSetting):any{
		if (setting.list)
			return [];

		switch(setting.type){
			case "string":
				return "";
			case "number":
				return 1;
			case "boolean":
				return true;
			case "field":
				return { id: "field_id", name: "Field Name" };
			case "list":
				return [];
			default:
				return null;
		}
	}
}