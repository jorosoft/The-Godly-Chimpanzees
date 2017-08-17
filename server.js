const config = require('./config');


require('./db').init(config.connectionString)
    .then((db) => {
        return require('./data').init(db);
    })
    .then((data) => {
        return require('./app').init(data);
    })
    .then((app) => {
        const server = app.listen(config.port, () => {
            console.log('server started at '+config.port);
        });
    })
    .catch((err) => {
        console.log(err);
    });
