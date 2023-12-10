import {
	Language,
	Config,
	BerryFlavor,
	Berry,
	BerryFirmness
} from "./types";
import { RequestResource } from "./pokeapi/RequestResource";
import { BaseRequest } from "./pokeapi/BaseRequest";

export * from './types';

const defaultConfig: Config = {
	url: 'https://pokeapi.co/api/v2/',
	cache: true,
};

export class PokeLEX {
	constructor(config?: Config) {
		BaseRequest.setConfig(config || defaultConfig);
	}

	public Berry = new RequestResource<Berry>(Berry);
	public BerryFirmness = new RequestResource<BerryFirmness>(BerryFirmness);
	public BerryFlavor = new RequestResource<BerryFlavor>(BerryFlavor);

	public Language = new RequestResource<Language>(Language);
}
