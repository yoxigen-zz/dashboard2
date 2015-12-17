import {WidgetViewModel, WidgetViewModelConfig} from './WidgetViewModel';
import {Utils} from '../services/utils';
import {Http, Response} from 'angular2/http';

export class WidgetModel{
    id:string;
    title:string;
    lastUpdateTime:Date;
	dataSource:string;
	views:WidgetViewModel[];
	data:any;
	error:Error;

	private http:Http;

    constructor(config:WidgetModelConfig, http:Http){
        this.id = config.id;
        this.title = config.title;
		this.dataSource = config.dataSource;
		this.http = http;

		if (config.views)
			this.views = Utils.Objects.toObjectArray(config.views, WidgetViewModel);
    }

    /**
     * Refreshes the widget's data
     */
    loadData():void{
		if (!this.dataSource)
			return;

		this.http.get("mock_data/data/" + this.dataSource).subscribe((res:Response) => {
			this.data = Object.freeze((<{}[]>res.json()));
			this.error = null;
		}, (error:Response) => {
			this.data = null;
			this.error = {
				text: error.text(),
				status: error.status
			}
		});

        this.lastUpdateTime = new Date;
    }
}

export interface WidgetModelConfig{
    id:string,
    title:string,
	dataSource:string;
	views:WidgetViewModelConfig[]
}

export interface DashboardWidgetConfig{
	id:string
}

export interface Error{
	text: string,
	status?: number
}