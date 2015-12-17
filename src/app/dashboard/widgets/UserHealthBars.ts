import {WidgetsService} from "../services/WidgetsService";
import {Injectable} from "angular2/core";

@Injectable()
export class UserHealthBars{
	constructor(widgetsService:WidgetsService){
		widgetsService.registerWidget({
			"id": "userHealthBars",
			"title": "User's Health",
			"dataSource": "user_health.json",
			"views": [
				{
					"type": "bars",
					"settings": {
						"valueField": "health",
						"labelField": "name"
					}
				}
			]
		});
	}
}