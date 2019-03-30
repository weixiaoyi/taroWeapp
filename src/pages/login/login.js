import Taro from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { MixinA } from '../../components';
import { Inject, toJS } from '../../utils';
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
    Taro.cloud
      .callFunction({
        name: 'main',
        data: {}
      })
      .then(res => console.log(res))
      .catch(err => console.log(er));
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
