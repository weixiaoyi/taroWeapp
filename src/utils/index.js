import { observer, inject } from '@tarojs/mobx';
export const _ = require('lodash');

export const Inject = fun => component => inject(fun)(observer(component));

export const resOk = res => _.get(res, 'result.data') || _.get(res, 'data');
