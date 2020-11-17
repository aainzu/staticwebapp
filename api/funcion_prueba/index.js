const mysqlx = require('@mysql/xdevapi');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    session = await mysqlx.getSession(config);
    const tabla = await this.session.getSchema(config.schema).getTable(tablaTemp);
    let result = await tabla.select().execute();
    console.log(result.fetchAll());
    const responseMessage = result.fetchAll();

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}