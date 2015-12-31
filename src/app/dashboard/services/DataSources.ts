import {Injectable} from "angular2/core";
import {DataSourceModel} from "../models/DataSourceModel";
import {Utils} from "./utils";

@Injectable()
export class DataSources{
	allDataSources:Array<DataSourceModel> = [
		{
			"url": "user_types.json",
			"name": "User Types",
			"id": "user_types",
			"isList": true,
			"properties": [
				{
					"name": "name",
					"type": "String"
				},
				{
					"name": "value",
					"type": "Number"
				}
			]
		},
		{
			"url": "users.json",
			"name": "Users",
			"id": "users",
			"isList": true,
			"properties": [
				{
					"name": "id",
					"type": "Number"
				},
				{
					"name": "name",
					"type": "String"
				},
				{
					"name": "age",
					"type": "Number"
				}
			]
		},
		{
			"url": "users_health.json",
			"name": "Users Health",
			"id": "users_health",
			"isList": true,
			"properties": [
				{
					"name": "name",
					"type": "String"
				},
				{
					"name": "value",
					"type": "Number"
				}
			]
		},
		{
			"url": "users_age.json",
			"name": "Users Age",
			"id": "users_age",
			"isList": true,
			"properties": [
				{
					"name": "name",
					"type": "String"
				},
				{
					"name": "value",
					"type": "Number"
				}
			]
		}
	].map(dataSourceModelConfig => { return new DataSourceModel(dataSourceModelConfig)});

	private dataSourcesMap:Map<String,DataSourceModel> = Utils.Arrays.toMap(this.allDataSources);

	getDataSourceById(dataSourceId:String):DataSourceModel{
		return this.dataSourcesMap.get(dataSourceId);
	}
}