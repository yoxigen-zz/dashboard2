export class DataSourceModel{
	url:string;
	name:string;
	id:string;
	isList:boolean = false;
	properties:Array<{ name:string, type:string }>;

	constructor(dataSourceModelConfig:DataSourceModelOptions){
		Object.assign(this, dataSourceModelConfig);
	}
}

export interface DataSourceModelOptions{
	url:string;
	name:string;
	id:string;
	isList:boolean;
	properties:Array<{ name:string, type:string }>;
}