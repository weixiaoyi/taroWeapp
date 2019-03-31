import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { MixinA } from '../../components/mixin/mixin';
import { Inject } from '../../utils';
import styles from './login.module.scss';

@Inject(({ globalStore }) => ({ globalStore }))
class Login extends MixinA {
  config = {
    navigationBarTitleText: '登陆'
  };
  startInit = () => {
    const {
      globalStore: { userInfo: { nickName } = {} }
    } = this.props;
  };

  render() {
    const {
      globalStore: { userInfo: { nickName } = {} }
    } = this.props;
    return (
      <View className={styles.index}>
        <Text>{nickName}哈哈哈哈</Text>
      </View>
    );
  }
}

export default Login;
