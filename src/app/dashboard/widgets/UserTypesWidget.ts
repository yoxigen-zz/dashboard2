import {WidgetsService} from "../services/WidgetsService";
import {Injectable} from "angular2/core";

@Injectable()
export class UserTypesWidget{
	constructor(widgetsService:WidgetsService){
		widgetsService.registerWidget({
			"id": "userTypes",
			"title": "User Types",
			"dataSource": "user_types.json",
			"views": [
				{
					"type": "pie",
					"settings": {
						"nameField": "name",
						"valueField": "value"
					}
				}
			]
		});
	}
}