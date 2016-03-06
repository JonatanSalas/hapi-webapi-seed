/// <reference path="Global.d.ts" />
"use strict";

import {WebApp, StartOptions} from 'hapi-webapi';
import {Startup} from "./Startup";

var options = new StartOptions();
options.port = 4600;

WebApp.Start<Startup>(Startup, options);