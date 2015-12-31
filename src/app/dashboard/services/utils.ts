export module Utils{

	export module Arrays {
		export function toMap<T>(items:Array<T>, key?: string):Map<any, T>{
			if (!key)
				key = "id";

			var map:Map<any, any> = new Map<any, any>();
			items.forEach(item => {
				map.set(item[key], item);
			});

			return map;
		}

		export function spliceImmutable<T>(items:Array<T>, item:T):Array<T>{
			let itemIndex = items.indexOf(item);
			if (~itemIndex){
				let itemsBefore = items.slice(0, itemIndex),
					itemsAfter = items.slice(itemIndex + 1);

				return itemsBefore.concat(itemsAfter);
			}

			return null;
		}
	}

	export module Objects {
		export function toObjectArray(items:Array<Object>, constructor){
			return items.map(item => {
				return new constructor(item);
			});
		}
	}
}