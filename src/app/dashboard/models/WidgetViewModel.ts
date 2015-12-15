import {WidgetViewTypeModel} from './WidgetViewTypeModel';
import {WidgetViewTypesService} from '../services/WidgetViewTypesService';

export class WidgetViewModel{
	public type:WidgetViewTypeModel;
	public settings:Object;

	constructor(config:WidgetViewModelConfig){
		this.type = WidgetViewTypesService.getWidgetViewTypeById(config.type);
		this.settings = config.settings;

		Object.seal(this);
	}
}

export interface WidgetViewModelConfig{
	type:string,
	settings:any
}
