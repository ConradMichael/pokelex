import axios from 'axios';
import { BaseRequest } from './BaseRequest';
import { INamedApiResource, NamedApiResource } from './NamedApiResource';
import { BaseResource, Constructor, IListResult, IRequestOptions } from '../types';

export class RequestResource<T extends BaseResource> extends BaseRequest {
	private _constructor: Constructor<T>;
	private type: string;

	constructor(_constructor: Constructor<T>) {
		super();

		this.type = _constructor.getUrlSegment();
		this._constructor = _constructor;
	}

	public async get(index: number | string): Promise<T> {
		try {
			return await axios.get(
				`${BaseRequest.getConfig().url}/${this.type}/${index}`
			).then((res) => {
				return new this._constructor(res.data);
			});
		} catch (error) {
			throw new Error(`Failed to fetch ${this.type} information for ${index}. Error: ${error}`);
		}
	}

	public async list(options?: IRequestOptions): Promise<IListResult<T>> {
		const requestUrl = `${BaseRequest.getConfig().url}/${this.type}`;

		const params = { 
			limit: options?.limit ? options?.limit : null,
			offset: options?.offset ? options?.offset : null,
		};

		try {
			return await axios.get(requestUrl, { params }).then((res) => {
				const data: IListResult<T> = res.data;

				return {
					...data,
					results: data.results.map((result: INamedApiResource<T>) => new NamedApiResource(result, this._constructor))
				};
			});
		} catch (error) {
			throw new Error(`Failed to fetch ${this.type} information. Error: ${error}`);
		}
	}
}
