import { INamedApiResource, NamedApiResource } from "../../pokeapi/NamedApiResource";
import { ILanguage, Language } from "../Language/Language";

export interface IName {
    name: string;
    language: INamedApiResource<ILanguage>;
}

export class Name implements IName {
	public name!: string;
	public language!: INamedApiResource<ILanguage>;

	constructor(params: IName) {
		Object.assign(this, params);
		this.language = new NamedApiResource(params.language, Language);
	}
}
