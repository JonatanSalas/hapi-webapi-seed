/// <reference path="Global.d.ts" />

"use strict";

//import {WebApp} from 'hapi-webapi';

import {IStartup, IAppBuilder, HttpConfiguration} from 'hapi-webapi/server';
import {UsersController} from "./Controllers/UsersController";

const pgk = require("../package.json");

export class Startup implements IStartup {
    Configuration(app: IAppBuilder) {

        var config = new HttpConfiguration();
        app.useWebApi(config);

        config.enableSwagger({ title: 'Directory API', description: pgk.description, version: pgk.version });
        config.enableSwaggerUi({ title: 'API Documentation v' + pgk.version, path: '/docs' });

        // This is different from ASP.NET WebAPI, controllers needs to manually be registered.
        app.controllers.add(UsersController);
        //app.controllers.add(GroupsController);

        app.useWelcomePage();
        //app.useDirectoryBrowser('./public/', '/files/');
        //app.useStaticFiles('static');
    }
}
