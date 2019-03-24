import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';
import './index.scss';

@inject(({ counterStore }) => ({ counterStore }))
@observer
class Me extends Component {
  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  // componentDidShow() {}

  componentDidHide() {}

  render() {
    const { handlerMe } = this.props;
    return (
      <View className='index'>
        <Text
          onClick={() => {
            handlerMe();
            console.log('hhh');
          }}
        >
          dddd
        </Text>
      </View>
    );
  }
}

export default Me;
