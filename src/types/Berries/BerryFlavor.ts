import { IName, Name } from "../Common";
import { BaseResource } from "../Utils";
import { IBerryPotency, BerryPotency } from "./BerryPotency";

export interface IBerryFlavor {
    id: number;
    name: string;
    berries: Array<IBerryPotency>;
    names: Array<IName>;
}

export class BerryFlavor extends BaseResource implements IBerryFlavor {
	protected static readonly _urlSegment = 'berry-flavor';
	public id!: number;
	public name!: string;
	public berries!: Array<IBerryPotency>;
	public names!: Array<IName>;

	constructor(params: IBerryFlavor) {
		super();

		Object.assign(this, params);
		this.names = params.names.map((name) => new Name(name));
		this.berries = params.berries.map((berry) => new BerryPotency(berry));
	}
}
