export class ConditionOperator{
	constructor(public id:string, public name:string, public testFunction:(value:any, inputValue:any) => boolean){}

	test(value:any, inputValue:any):boolean{
		return this.testFunction(value, inputValue);
	}
}