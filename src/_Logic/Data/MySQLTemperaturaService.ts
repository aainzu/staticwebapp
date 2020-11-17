import { ITemperatura } from "../Models/ITemperatura";
import { ITemperaturaServices } from "../Services/ITemperaturaServices";

export class MySQLTemperaturaService implements ITemperaturaServices {
    /**
     *A modo de prueba de concepto voy a implementar ambas soluciones pero no sé cuál será la óptima
     *Voy a acceder a bbdd mediante un conector aquí a pelo (fijo que se puede) y usando las azure functions
     *(que pa eso están).
     */
    private session:any;
    constructor() {

    }
    
    public getAll = (): Promise<ITemperatura[]> => new Promise(async (resolve, reject) => {
        try {
            let response = await fetch("/api/function_prueba");
            console.log(response);
            resolve();
        } catch (error) {
            reject(error);
        }
    })

}