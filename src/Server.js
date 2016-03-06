"use strict";
const WebApi = require('hapi-webapi');
const Startup_1 = require("./Startup");
var options = new WebApi.StartOptions();
options.port = 4600;
WebApi.WebApp.Start(Startup_1.Startup, options);
