'use strict';

module.exports = {
    mongodb: {
        // URI to connect to your MongoDB instance
        connectionString: process.env.MONGO_URI || 'mongodb://localhost:27017/fitness-app',
    },
    site: {
        // Base URL for the Mongo Express interface
        baseUrl: '/',
        // Port to run the Mongo Express server on
        port: process.env.MONGO_EXPRESS_PORT || 8081,
    },
    useBasicAuth: true,
    basicAuth: {
        username: process.env.MONGO_EXPRESS_USER || 'admin',
        password: process.env.MONGO_EXPRESS_PASS || 'password',
    },
};