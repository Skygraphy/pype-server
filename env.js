const path = require('path');

const env = {

    port: process.env.PORT || '1337',

    parseServer: {

        appId: process.env.PARSE_SERVER_APP_ID || '71SliqYnrwVFOc1NHKgQl7tXJ7m1oCYtJx66CbvGjStdQxACBiNOBPqL4NHc0WYLsewYhiHz26wX20S9',
        appName: process.env.PARSE_SERVER_APP_NAME || 'pype-server',
        cloud: process.env.PARSE_SERVER_CLOUD || path.join(__dirname, '/cloud/main.js'),
        dashboardPassword: process.env.PARSE_SERVER_DASHBOARD_PASSWORD || '$2y$12$eo5ub5QnplinTqhcRC4Af.O30ho5mVUdFlG00Jax1vk3h9sdtVfqm',
        dashboardPath: process.env.PARSE_SERVER_DASHBOARD_PATH || '/dashboard',
        dashboardUser: process.env.PARSE_SERVER_DASHBOARD_USER || 'pype-server',
        databaseURI: process.env.PARSE_SERVER_DATABASE_URI || 'mongodb://localhost:27017/dev',
        filesUrl: process.env.PARSE_SERVER_FILES_URL || 'http://localhost:1337/parse/files',
        logLevel: process.env.PARSE_SERVER_LOG_LEVEL || 'error',
        masterKey: process.env.PARSE_SERVER_MASTER_KEY || 'BFjfZArrmkDMJMKUPSKoXuGy7FALWnoRueQ0uwtDJ5kwyaEdS6pfnoHoC9l83Qd9lmtt7Qmv4zTM43Fa',
        maxUploadSize: process.env.PARSE_SERVER_MAX_UPLOAD_SIZE || '20mb',
        mountPath: process.env.PARSE_SERVER_MOUNT_PATH || '/parse',
        publicServerURL: process.env.PARSE_SERVER_PUBLIC_SERVER_URL || 'http://localhost:1337/parse',
        serverURL: process.env.PARSE_SERVER_SERVER_URL || 'http://localhost:1337/parse',
        verifyUserEmails: false
    }
};

module.exports = env;