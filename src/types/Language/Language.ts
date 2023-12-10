import { BaseResource } from "../Utils/BaseResource";
import { IName, Name } from "../Common";

export interface ILanguage {
    id: number;
    name: string;
    official: boolean;
    iso639: string;
    iso3166: string;
    names: Array<IName>;
}

export class Language extends BaseResource implements ILanguage {
	protected static readonly _urlSegment = 'language';
	public id!: number;
	public name!: string;
	public official!: boolean;
	public iso639!: string;
	public iso3166!: string;
	public names!: Array<IName>;

	constructor(params: ILanguage) {
		super();

		Object.assign(this, params);
		this.names = params.names.map((name) => new Name(name));
	}
}
