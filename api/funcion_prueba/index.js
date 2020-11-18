const mysql = require('mysql');

var version = process.version;

module.exports = async function (context, req) {
    try {
        const config = {
            password: 'My$qLEf0r!',
            user: 'administrador@mysql-prueba-functions',
            host: 'mysql-prueba-functions.mysql.database.azure.com',
            database: 'aitorpruebas'
        };
        const connection = mysql.createConnection(config);
        let results;
        connection.connect(err => {
            if (err) throw err;
            // if connection is successful
            con.query("SELECT * FROM prueba", function (err, result, fields) {
                // if any error while executing above query, throw error
                if (err) throw err;
                // if there is no error, you have the result
                results = result;
            });
        });
        connection.end();
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: results
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: `Houston tenemos un problema:${error}`
        }
    }

}