import { observable, computed } from 'mobx';
import StoreExtend from './StoreExtend';

class GlobalStore extends StoreExtend {
  constructor(props) {
    super(props);
  }
  @observable name = 'globalvvvv';
  @observable userInfo = {};

  updateUserInfo = ({ userInfo }) => {
    this.changeModel('userInfo', userInfo);
  };
}

export default GlobalStore;
