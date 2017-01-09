'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './dental-sheet.routes';
import IsiComponent from './isi/isi.component';
import PsqiComponent from './psqi/psqi.component';

export class DentalSheetComponent {
  /*@ngInject*/
  constructor() {
  }
}

export default angular.module('toothrushApp.dental-sheet', [uiRouter, IsiComponent, PsqiComponent])
  .config(routes)
  .component('dentalSheet', {
    template: require('./dental-sheet.pug'),
    controller: DentalSheetComponent,
    controllerAs: 'dentalSheetCtrl'
  })
  .name;
