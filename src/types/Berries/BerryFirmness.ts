import { NamedApiResource } from "../../pokeapi/NamedApiResource";
import { BaseResource } from "../Utils/BaseResource";
import { IName, Name } from "../Common";
import { Berry, IBerry } from "./Berry";

export interface IBerryFirmness {
    id: number;
    name: string;
    berries: Array<NamedApiResource<IBerry>>;
    names: Array<IName>;
}

export class BerryFirmness extends BaseResource implements IBerryFirmness {
	protected static readonly _urlSegment = 'berry-firmness';
	public id!: number;
	public name!: string;
	public berries: Array<NamedApiResource<IBerry>>;
	public names: Array<IName>;

	constructor(params: IBerryFirmness) {
		super();

		Object.assign(this, params);
		this.berries = params.berries.map((berry) =>  new NamedApiResource(berry, Berry));
		this.names = params.names.map((name) => new Name(name));
	}
}
