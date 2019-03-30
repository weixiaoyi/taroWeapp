import Taro from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import { Mixin } from '../../components';
import Me from './Me';
import styles from './login.module.scss';

@inject(({ counterStore }) => ({ counterStore }))
@observer
class Login extends Mixin {
  config = {
    navigationBarTitleText: '首页'
  };

  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {
    // Taro.authorize({
    //   scope: 'scope.record'
    // }).then(() => {
    //   Taro.startRecord();
    // });
  }

  componentWillUnmount() {}

  componentDidShow() {
    //  console.log(this.$router.params, "---this.$router.params");
  }

  componentDidHide() {}

  increment = () => {
    const {
      counterStore: { dispatch }
    } = this.props;
    dispatch({
      type: 'increment'
    });
    // counterStore.increment()
  };

  decrement = () => {
    const {
      counterStore: { dispatch }
    } = this.props;
    dispatch({
      type: 'decrement'
    });
  };

  incrementAsync = () => {
    const {
      counterStore: { dispatch }
    } = this.props;
    dispatch({
      type: 'incrementAsync'
    });
  };

  render() {
    const {
      counterStore: { counter }
    } = this.props;
    return (
      <View className={styles.index}>
        <Button
          onClick={() => {
            this.increment();
          }}
        >
          +
        </Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Adddddaaa Async</Button>
        <Text>{counter}</Text>
        <Me
          handlerMe={() => {
            console.log('ggg');
          }}
        />
      </View>
    );
  }
}

export default Login;
