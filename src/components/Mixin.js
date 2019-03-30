import Taro, { Component } from '@tarojs/taro';
import { observer, inject } from '@tarojs/mobx';
import { _ } from '../utils';

class MixinBase extends Component {
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

  _timeOutPromise = (body, timeOut = 2000) =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(body);
      }, timeOut);
    });
}

class _MixinA extends MixinBase {
  constructor(props) {
    super(props);
    if (!props.globalStore) {
      console.error('MixinA容器组件必须传入globalStore');
    }
  }

  async componentDidMount() {
    try {
      await this._checkLogin();
    } catch (err) {
      await this._doLogin();
    } finally {
      await this._getUserInfo();
      Taro.cloud
        .callFunction({
          name: 'main',
          data: {}
        })
        .then(res => console.log(res));
      super.componentDidMount();
    }
  }

  _checkLogin = async () => {
    try {
      return await Taro.checkSession();
    } catch (err) {
      return Promise.reject(err);
    }
  };

  _doLogin = async () => {
    try {
      return await Taro.login();
    } catch (err) {
      return Promise.reject(err);
    }
  };

  _getUserInfo = async () => {
    const {
      globalStore: { dispatch, userInfo }
    } = this.props;
    if (!_.isEmpty(userInfo)) return userInfo;
    try {
      const res = await Taro.getUserInfo();
      dispatch({
        type: 'updateUserInfo',
        payload: {
          userInfo: res.userInfo
        }
      });
    } catch (err) {
      return Promise.reject('获取用户信息失败');
    }
  };
}

export const MixinA = _MixinA;
