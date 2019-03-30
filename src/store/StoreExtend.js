import { observable, computed, action } from 'mobx';

class StoreExtend {
  constructor(globalStore) {
    this.globalStore = globalStore;
  }

  @computed get extendname() {
    return this.globalStore.name;
  }

  dispatch = (obj = {}) => {
    const { type, payload = {} } = obj;
    if (this[type]) {
      this[type](payload);
      return Promise.resolve();
    } else {
      return Promise.reject('dispatch的type方法必须存在');
    }
  };

  @action
  changeModel = (key, value) => {
    this[key] = value;
  };
}

export default StoreExtend;
