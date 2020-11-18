const mysql = require('mysql');

function getAll(context){
    return new Promise((res,rej) => {
        const config = {
            password: 'My$qLEf0r!',
            user: 'administrador@mysql-prueba-functions',
            host: 'mysql-prueba-functions.mysql.database.azure.com',
            database: 'aitorpruebas'
        };
        const connection = mysql.createConnection(config);
        connection.connect(err => {
            if (err) {rej(err)};
            // if connection is successful
            connection.query("SELECT * FROM prueba", function (err, result, fields) {
                // if any error while executing above query, throw error
                if (err) {rej(err)};
                res(context.res = {
                    body: result
                });
                // if there is no error, you have the result
            });
        });
    })
}

module.exports = async function (context, req) {
    try {
        await getAll(context)
    } catch (error) {
        context.res = {
            status: 500,
            body: `Houston tenemos un problema:${error}`
        }
    }

}