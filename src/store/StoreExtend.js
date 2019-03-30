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
    this[type](payload);
  };

  @action
  changeModel = (key, value) => {
    this[key] = value;
  };
}

export default StoreExtend;