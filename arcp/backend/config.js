const config = {
    appConfig: {
        appHost: process.env.APP_HOST,
        appPort: process.env.APP_PORT
    },
    dbConfig: {
        dbPort: process.env.DB_PORT,
        dbHost: process.env.DB_HOST,
        dbName: process.env.DB_NAME,
        db: process.env.DB
    }
}

module.exports = config;