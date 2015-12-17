import {Type} from "angular2/core";


import {UsersWidget} from "./UsersWidget";
import {UserTypesWidget} from "./UserTypesWidget";
import {UserHealthBars} from "./UserHealthBars";

export const WIDGET_PROVIDERS:Type[] = [UsersWidget, UserTypesWidget, UserHealthBars];