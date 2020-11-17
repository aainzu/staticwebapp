import { ITemperatura } from "../Models/ITemperatura";

export interface ITemperaturaServices {
    getAll():Promise<ITemperatura[]>;
}