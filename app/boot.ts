/// <reference path="../typings/tsd.d.ts" />
import * as angular from 'angular';
import {MainController} from './main.controller';


// Creating main app module and MainController
angular
    .module('app', [])
    .controller('MainController', MainController);


// Bootstrap the angular app module
angular
    .bootstrap(document.documentElement, ['app']);