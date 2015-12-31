import {PropertyType} from "../reflection/PropertyType";
import {Utils} from "../services/utils";

export class DataSourceModel{
	url:string;
	name:string;
	id:string;
	isList:boolean = false;
	properties:Array<DataSourceProperty>;
	propertiesMap:Map<string, DataSourceProperty>;

	constructor(dataSourceModelConfig:DataSourceModelOptions){
		Object.assign(this, dataSourceModelConfig);

		if (this.properties) {
			this.properties = this.properties.map(p => {
				return new DataSourceProperty(p.name, PropertyType[p.type]);
			});
			this.propertiesMap = Utils.Arrays.toMap(this.properties, "name");
		}
		else
			this.properties = [];
	}

	getFirstPropertyOfType(type:PropertyType):DataSourceProperty{
		for(let property of this.properties){
			if (property.type === type)
				return property;
		}

		return null;
	}
}

class DataSourceProperty{
	constructor(public name:string, public type:PropertyType){

	}

}

export interface DataSourceModelOptions{
	url:string;
	name:string;
	id:string;
	isList:boolean;
	properties:Array<{ name:string, type:string }>;
}