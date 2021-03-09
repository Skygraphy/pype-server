const env = require('./env');
const path = require('path');

const express = require('express');
const app = express();
const http = require('http').Server(app);

const ParseServer = require('parse-server').ParseServer;
const ParseDashboard = require('parse-dashboard');

app.use(express.static(path.join(__dirname, '/public')));

const parseServer = new ParseServer({

    appId: env.parseServer.appId,
    appName: env.parseServer.appName,
    cloud: env.parseServer.cloud,
    databaseURI: env.parseServer.databaseURI,
    logLevel: env.parseServer.logLevel,
    masterKey: env.parseServer.masterKey,
    maxUploadSize: env.parseServer.maxUploadSize,
    publicServerURL: env.parseServer.publicServerURL,
    serverURL: env.parseServer.serverURL,
    verifyUserEmails: env.parseServer.verifyUserEmails
});

app.use(env.parseServer.mountPath, parseServer);

app.get('/', (req, res) => {

    res.status(200).send(env.parseServer.appName);
});

http.listen(env.port, () => {

    console.log(env.parseServer.appName + ' running on port ' + env.port);
});

// app.get('/', (req, res) => {

//     res.send('Hello World!');
// })

// app.listen(port, () => {

//     console.log(`pype-server listening at http://localhost:${port}`);
// })