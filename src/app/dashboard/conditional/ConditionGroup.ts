import {Condition} from "./Condition";
import {ConditionOptions} from "./Condition";

export class ConditionGroup{
	constructor(public conditions:Array<Condition>, private outputValue:any){
	}

	getValue(inputValue:any){
		for (let condition of this.conditions){
			if (!condition.test(inputValue))
				return null;
		}

		return this.outputValue;
	}
}

export interface ConditionGroupOptions{
	output: any,
	conditions: Array<ConditionOptions>
}