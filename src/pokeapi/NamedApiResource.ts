import { Constructor } from "../types";
import { DirectResource } from "./DirectResource";

export interface INamedApiResource<T> {
    name: string;
    url: string;
    get: () => Promise<T>;
}

export class NamedApiResource<T> implements INamedApiResource<T> {
	name: string;
	url: string;
	#_constructor: Constructor<T>;

	constructor(params: INamedApiResource<T>, _constructor: Constructor<T>) {
		this.name = params.name;
		this.url = params.url;
		this.#_constructor = _constructor;
	}

	public async get(): Promise<T> {
		return new DirectResource<T>(this.url, this.#_constructor).get();
	}
}
