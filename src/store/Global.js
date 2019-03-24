import { observable, computed } from 'mobx';
import StoreExtend from './StoreExtend';

class GlobalStore extends StoreExtend {
  constructor(props) {
    super(props);
  }
  @observable name = 'globalvvvv';
}

export default GlobalStore;
