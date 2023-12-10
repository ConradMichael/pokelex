import { NamedApiResource } from "../../pokeapi/NamedApiResource";
import { IBerry, Berry } from "./Berry";

export interface IBerryPotency {
	berry: NamedApiResource<IBerry>;
	potency: number;
}

export class BerryPotency implements IBerryPotency {
	public berry: NamedApiResource<IBerry>;
	public potency!: number;

	constructor(params: IBerryPotency) {
		Object.assign(this, params);
		this.berry = new NamedApiResource(params.berry, Berry);
	}
}
