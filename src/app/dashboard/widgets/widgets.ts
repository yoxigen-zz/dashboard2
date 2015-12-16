import {UsersWidget} from "./UsersWidget";
import {UserTypesWidget} from "./UserTypesWidget";
import {Provider} from "angular2/core";

export {UsersWidget} from "./UsersWidget";
export {UserTypesWidget} from "./UserTypesWidget";

export const WIDGET_PROVIDERS:Provider[] = [
	new Provider(UsersWidget, { useClass: UsersWidget }),
	new Provider(UserTypesWidget, { useClass: UserTypesWidget })
];