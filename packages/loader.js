import Core from './core';
import Module from './module';
import Detect from './detect';

var Moff = this.Moff = new Core();
Moff.extend('module', Module);
Moff.extend('detect', Detect);