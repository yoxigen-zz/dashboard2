export module Utils{

	export module Arrays {
		export function toMap(items:any[], key?: string){
			if (!key)
				key = "id";

			var map:Map<any, any> = new Map<any, any>();
			items.forEach(item => {
				map.set(item[key], item);
			});

			return map;
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