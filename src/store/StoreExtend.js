import { observable, computed, action, set } from 'mobx';
import { _ } from '../utils';

class StoreExtend {
  constructor(globalStore) {
    this.globalStore = globalStore;
  }

  dispatch = (obj = {}) => {
    const { type, payload = {} } = obj;
    if (this[type]) {
      const res = this[type](payload);
      return Promise.resolve(res);
    } else {
      return Promise.reject('dispatch的type方法必须存在');
    }
  };

  @action
  changeModel = (key, value) => {
    this[key] = value;
  };

  getUserInfo = () => this.globalStore.userInfo;
}

export default StoreExtend;
