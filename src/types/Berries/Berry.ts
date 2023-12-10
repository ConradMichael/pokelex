import { NamedApiResource } from "../../pokeapi/NamedApiResource";
import { BaseResource } from "../Utils/BaseResource";
import { BerryFirmness } from "./BerryFirmness";
import { FlavorPotency } from "./FlavorPotency";

export interface IBerry {
    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    natural_gift_power: number;
    size: number;
    smoothness: number;
    soil_dryness: number;
    flavors: Array<FlavorPotency>;
    firmness: NamedApiResource<BerryFirmness>;
	// item					NEEDS: TYPES
	// natural_gift_type	NEEDS: TYPES
}

export class Berry extends BaseResource implements IBerry {
	protected static readonly _urlSegment = 'berry';
	public id!: number;
	public name!: string;
	public growth_time!: number;
	public max_harvest!: number;
	public natural_gift_power!: number;
	public size!: number;
	public smoothness!: number;
	public soil_dryness!: number;
	public flavors!: Array<FlavorPotency>;
	public firmness: NamedApiResource<BerryFirmness>;

	constructor(params: IBerry) {
		super();

		Object.assign(this, params);
		this.firmness = new NamedApiResource(params.firmness, BerryFirmness);
		this.flavors = params.flavors.map((flavor) => new FlavorPotency(flavor));
	}
}
