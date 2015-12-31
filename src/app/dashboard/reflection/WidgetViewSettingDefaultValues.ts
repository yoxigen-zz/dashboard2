import {WidgetViewSetting} from "./WidgetViewSetting";
import {PropertyType} from "./PropertyType";

export module WidgetViewSettingDefaultValues{
	export function getDefaultSettingValue(setting:WidgetViewSetting):any{
		if (setting.list)
			return [];

		switch(setting.type){
			case PropertyType.String:
				return "";
			case PropertyType.Number:
				return 1;
			case PropertyType.Boolean:
				return true;
			case PropertyType.Field:
				return { id: "field_id", name: "Field Name" };
			case PropertyType.List:
				return [];
			case PropertyType.Type:
				return PropertyType.String;
			default:
				return null;
		}
	}
}