import { observer, inject } from '@tarojs/mobx';
export * from './lib';
//export const toJS = _toJS;

export const Inject = fun => component => inject(fun)(observer(component));
