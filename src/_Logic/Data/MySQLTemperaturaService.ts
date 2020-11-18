import { ITemperatura } from "../Models/ITemperatura";
import { ITemperaturaServices } from "../Services/ITemperaturaServices";

export class MySQLTemperaturaService implements ITemperaturaServices {
    /**
     *A modo de prueba de concepto voy a implementar ambas soluciones pero no sé cuál será la óptima
     *Voy a acceder a bbdd mediante un conector aquí a pelo (fijo que se puede) y usando las azure functions
     *(que pa eso están).
     */

    public getAll = (): Promise<ITemperatura[]> => new Promise(async (resolve, reject) => {
        try {
            fetch("/api/funcion_prueba").then(
                res => res.text()
            ).then(
                data => {
                    let aux = JSON.parse(data);
                    resolve(aux as ITemperatura[]);
                }
            )
        } catch (error) {
            reject(error);
        }
    })

}