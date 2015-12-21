import {ConditionOperator} from "./ConditionOperator";
import {ConditionOperators} from "./ConditionOperators";

export class Condition{
	operator:ConditionOperator;

	constructor(conditionOperatorId:string, private value:any){
		this.operator = ConditionOperators.getConditionOperatorById(conditionOperatorId);
	}

	test(inputValue:any){
		return this.operator.test(this.value, inputValue);
	}
}

export interface ConditionOptions{
	operator:string,
	value: any
}