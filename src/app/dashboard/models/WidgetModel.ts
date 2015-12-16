import {WidgetViewModel, WidgetViewModelConfig} from './WidgetViewModel';
import {Utils} from '../services/utils';
import {Observable} from "angular2/core";
import {Http, Response} from 'angular2/http';

export class WidgetModel{
    public id:string;
    public title:string;
    public lastUpdateTime:Date;
	public dataSource:string;
	public views:WidgetViewModel[];
	public data:any;

	http:Http;

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