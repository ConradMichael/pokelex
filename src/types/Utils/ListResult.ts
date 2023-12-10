import { INamedApiResource } from "../../pokeapi/NamedApiResource";

export interface IListResult<T> {
    count: number;
    next: string;
    previous: string;
    results: Array<INamedApiResource<T>>;
}
