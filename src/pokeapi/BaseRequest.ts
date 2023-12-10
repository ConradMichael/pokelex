import { Config } from "../types";

export class BaseRequest {
	private static config: Config;

	static setConfig(config: Config) {
		BaseRequest.config = config;
	}

	static getConfig() {
		return BaseRequest.config;
	}
}
