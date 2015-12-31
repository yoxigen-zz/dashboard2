export enum PropertyType{
	String,
	Number,
	Boolean,
	Date,
	Field,
	List,
	Type,
	Select
}

export var PropertyTypes:Array<PropertyType> = Object.keys(PropertyType).filter(v => isNaN(parseInt(v, 10))).map(v => { return PropertyType[v]; } );