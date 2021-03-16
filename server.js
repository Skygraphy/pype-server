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

const parseDashboard = new ParseDashboard({

  apps: [
    {
      appId: env.parseServer.appId,
      appName: env.parseServer.appName,
      masterKey: env.parseServer.masterKey,
      production: true,
      serverURL: env.parseServer.serverURL
    }
  ],
  trustProxy: 1,
  useEncryptedPasswords: true,
  users: [
    {
      pass: env.parseServer.dashboardPassword,
      user: env.parseServer.dashboardUser
    }
  ]
}, { allowInsecureHTTP: true, cookieSessionSecret: env.parseServer.masterKey });

app.use(env.parseServer.dashboardPath, parseDashboard);

app.get('/', (req, res) => {

  res.status(200).send(env.parseServer.appName);
});

app.use((err, req, res, next) => {

  res.status(500).json({ message: err.message });
});

http.listen(env.port, () => {

  console.log(env.parseServer.appName + ' running on port ' + env.port);
});
