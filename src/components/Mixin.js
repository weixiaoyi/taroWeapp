import Taro, { Component } from '@tarojs/taro';
import { _ } from '../utils';

class Mixin extends Component {
  constructor(props) {
    super(props);
    this._Mount = true;
    const setState = this.setState;
    this.setState = (obj, callback) => {
      if (this._Mount) {
        setState(obj, callback);
      }
    };
  }

  componentDidMount() {
    if (_.isFunction(this.startInit)) {
      this.startInit();
    }
  }

  componentWillUnmount() {
    this._Mount = false;
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatch(err) {
    Taro.showToast(err);
  }
}

export default Mixin;
