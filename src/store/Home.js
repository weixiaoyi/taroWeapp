import { observable } from 'mobx';
import StoreExtend from './StoreExtend';

class HomeStore extends StoreExtend {
  constructor(props) {
    super(props);
  }
  @observable counter1 = 0;
  counterStore = () => {
    this.counter1++;
  };

  increment = () => {
    this.changeModel('counter1', this.counter1 + 1);
  };
  decrement = () => {
    this.changeModel('counter1', this.counter1 - 1);
  };
  incrementAsync = () => {
    setTimeout(() => {
      this.changeModel('counter1', this.counter1 + 1);
    }, 1000);
  };
}

export default HomeStore;
