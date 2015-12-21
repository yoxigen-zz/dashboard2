import {Utils} from "../services/utils";
import {ConditionOperator} from "./ConditionOperator";
import {ConditionOperators} from "./ConditionOperators";
import {ConditionGroupOptions} from "./ConditionGroup";
import {ConditionGroup} from "./ConditionGroup";
import {Condition} from "./Condition";

export class Conditional{
	defaultValue:any;
	conditionGroups:Array<ConditionGroup>;

	constructor(conditionalOptions:ConditionalOptions){
		this.defaultValue = conditionalOptions.defaultValue;
		this.conditionGroups = conditionalOptions.conditionGroups.map((conditionGroupOptions:ConditionGroupOptions) => {
			var conditions:Array<Condition> = conditionGroupOptions.conditions.map(conditionOptions => {
				return new Condition(conditionOptions.operator, conditionOptions.value);
			});

			return new ConditionGroup(conditions, conditionGroupOptions.output);
		});
	}

	private testFunction:(inputValue:any) => any;

	getValue(inputValue:any){
		if (!this.testFunction)
			this.createTestFunction();

		return this.testFunction(inputValue);
	}

	private createTestFunction(){
		this.testFunction = (inputValue:any) => {
			var outputValue:any;

			for (let conditionGroup of this.conditionGroups){
				outputValue = conditionGroup.getValue(inputValue);
				if (outputValue !== null)
					return outputValue;
			}

			return this.defaultValue || null;
		};
	}
}

export interface ConditionalOptions{
	defaultValue?: any,
	conditionGroups: Array<ConditionGroupOptions>
}

