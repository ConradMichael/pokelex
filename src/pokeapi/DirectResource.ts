import axios from 'axios';
import { Constructor } from '../types';

export class DirectResource<T> {
	private _constructor: Constructor<T>;
	private _url: string;

	constructor(url: string, _constructor: Constructor<T>) {
		this._url = url;
		this._constructor = _constructor;
	}

	public async get(): Promise<T> {
		try {
			return await axios.get(this._url).then((res) => {
				return new this._constructor(res.data);
			});
		} catch (error) {
			throw new Error(`Failed to fetch direct information for: ${this._url}. Error: ${error}`);
		}
	}
}
