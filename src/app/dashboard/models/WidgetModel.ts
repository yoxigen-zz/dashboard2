import {WidgetViewModel, WidgetViewModelConfig} from './WidgetViewModel';
import {Utils} from '../services/utils';
import {Http, Response} from 'angular2/http';
import { Observable, Subscriber } from 'rxjs/Rx';
import {DataSourceModel, DataSourceModelOptions} from "./DataSourceModel";
import {DataSources} from "../services/DataSources";

export class WidgetModel{
    id:string;
    title:string;
    lastUpdateTime:Date;
	dataSource:DataSourceModel;
	views:WidgetViewModel[];
	data:any;
	data$:Observable<any>;
	private _dataObserver:Subscriber<any>;
	error:Error;

    constructor(private http:Http, private dataSources:DataSources, config?:WidgetModelConfig){
		if (config) {
			this.id = config.id;
			this.title = config.title;
			this.dataSource = dataSources.getDataSourceById(config.dataSource);

			if (config.views)
				this.views = Utils.Objects.toObjectArray(config.views, WidgetViewModel);
		}

		this.data$ = new Observable(observer => this._dataObserver = observer).share();
    }

    /**
     * Refreshes the widget's data
     */
    loadData():void{
		if (!this.dataSource)
			return;

		this.http.get("mock_data/data/" + this.dataSource.url).subscribe((res:Response) => {
			this.data = Object.freeze((<{}[]>res.json()));
			this._dataObserver && this._dataObserver.next(this.data);
			this.error = null;
		}, (error:Response) => {
			this.data = null;
			this.error = {
				text: error.text ? error.text() : error.toString(),
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