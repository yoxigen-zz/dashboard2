import {ConditionOperator} from "./ConditionOperator";
import {Utils} from "../services/utils";

export module ConditionOperators {

	export const CONDITION_OPERATORS:Array<ConditionOperator> = [
		{
			name: "Equals",
			id: "===",
			testFunction: (value:any, inputValue:any):boolean => {
				return value === inputValue;
			}
		},
		{
			name: "Greater than",
			id: ">",
			testFunction: (value:any, inputValue:any):boolean => {
				return value < inputValue;
			}
		},
		{
			name: "Greater than or equals",
			id: ">=",
			testFunction: (value:any, inputValue:any):boolean => {
				return value <= inputValue;
			}
		},
		{
			name: "Lesser than",
			id: "<",
			testFunction: (value:any, inputValue:any):boolean => {
				return value > inputValue;
			}
		},
		{
			name: "Lesser than or equals",
			id: "<=",
			testFunction: (value:any, inputValue:any):boolean => {
				return value >= inputValue;
			}
		}
	].map(conditionOperatorConfig => {
		return new ConditionOperator(conditionOperatorConfig.id, conditionOperatorConfig.name, conditionOperatorConfig.testFunction);
	});

	var conditionOperatorsMap:Map<string, ConditionOperator> =  Utils.Arrays.toMap(CONDITION_OPERATORS);

	export function getConditionOperatorById(conditionOperatorId:string):ConditionOperator{
		return conditionOperatorsMap.get(conditionOperatorId);
	}
}