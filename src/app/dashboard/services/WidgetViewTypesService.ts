import {WidgetViewTypeModel} from '../models/WidgetViewTypeModel';
import {Utils} from '../../services/utils';
import {Injectable} from "angular2/core";

export module WidgetViewTypesService{
	var types:WidgetViewTypeModel[] = Utils.Objects.toObjectArray([
		{
			"id": "table",
			"name": "Table"
		},
		{
			"id": "pie",
			"name": "Pie Chart"
		}
	], WidgetViewTypeModel);

	var typesMap:Map<string, WidgetViewTypeModel> = Utils.Arrays.toMap(types, "id");

	export function getWidgetViewTypeById(viewTypeId):WidgetViewTypeModel {
		var type = typesMap.get(viewTypeId);
		if (!type)
			throw new Error("Unknown widget view type, '" + viewTypeId + "'.");

		return type;
	}
}