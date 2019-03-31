import { observable, computed } from 'mobx';
import StoreExtend from './StoreExtend';

class CounterStore extends StoreExtend {
  constructor(props) {
    super(props);
  }
}

export default CounterStore;
