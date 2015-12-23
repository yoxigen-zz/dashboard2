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
					"type": "string"
				},
				{
					"name": "value",
					"type": "number"
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
					"type": "number"
				},
				{
					"name": "name",
					"type": "string"
				},
				{
					"name": "age",
					"type": "number"
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
					"type": "string"
				},
				{
					"name": "value",
					"type": "number"
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
					"type": "string"
				},
				{
					"name": "value",
					"type": "number"
				}
			]
		}
	].map(dataSourceModelConfig => { return new DataSourceModel(dataSourceModelConfig)});

	private dataSourcesMap:Map<string,DataSourceModel> = Utils.Arrays.toMap(this.allDataSources);

	getDataSourceById(dataSourceId:string):DataSourceModel{
		return this.dataSourcesMap.get(dataSourceId);
	}
}