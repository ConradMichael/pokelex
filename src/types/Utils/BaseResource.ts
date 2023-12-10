export abstract class BaseResource {
	protected static readonly _urlSegment: string;

	public static getUrlSegment(): string {
		return this._urlSegment;
	}
}
