import { NamedApiResource } from "../../pokeapi/NamedApiResource";
import { IBerryFlavor, BerryFlavor } from "./BerryFlavor";

export interface IFlavorPotency {
	flavor: NamedApiResource<IBerryFlavor>;
	potency: number;
}

export class FlavorPotency implements IFlavorPotency {
	public potency!: number;
	public flavor: NamedApiResource<IBerryFlavor>;

	constructor(params: IFlavorPotency) {
		Object.assign(this, params);
		this.flavor = new NamedApiResource(params.flavor, BerryFlavor);
	}
}
