import {WidgetsService} from "../services/WidgetsService";
import {Injectable} from "angular2/core";

@Injectable()
export class UsersWidget{
	constructor(widgetsService:WidgetsService){
		widgetsService.registerWidget({
			"id": "users",
			"title": "Users",
			"dataSource": "users.json",
			"views": [
				{
					"type": "table",
					"settings": {
						"fields": [
							{
								"id": "id",
								"name": "ID"
							},
							{
								"id": "name",
								"name": "Name"
							},
							{
								"id": "age",
								"name": "Age"
							}
						]
					}
				}
			]
		});
	}
}