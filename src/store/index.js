import CounterStore from './Counter';
import HomeStore from './Home';
import GlobalStore from './Global';
import StoreExtend from './StoreExtend';

class Store {
  constructor() {
    this.globalStore = new GlobalStore();
    this.counterStore = new CounterStore(this.globalStore);
    this.homeStore = new HomeStore(this.globalStore);
    this.extendStore = new StoreExtend(this.globalStore);
  }
}

export default new Store();
