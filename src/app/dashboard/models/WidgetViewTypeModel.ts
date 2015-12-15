export class WidgetViewTypeModel{
	public id:string;
	public name:string;

	constructor(viewTypeConfig:WidgetViewTypeModelConfig){
		this.id = viewTypeConfig.id;
		this.name = viewTypeConfig.name;
	}
}

export interface WidgetViewTypeModelConfig{
	id:string,
	name:string
}