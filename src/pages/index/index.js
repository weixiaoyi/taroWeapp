import Taro, { Component } from "@tarojs/taro";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";

import "./index.scss";

@inject(({ counterStore }) => ({ counterStore }))
@observer
class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillMount() {}

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const {
      counterStore: { dispatch }
    } = this.props;
    dispatch({
      type: "increment"
    });
    // counterStore.increment()
  };

  decrement = () => {
    const {
      counterStore: { dispatch }
    } = this.props;
    dispatch({
      type: "decrement"
    });
  };

  incrementAsync = () => {
    const {
      counterStore: { dispatch }
    } = this.props;
    dispatch({
      type: "incrementAsync"
    });
  };

  render() {
    const {
      counterStore: { counter }
    } = this.props;
    return (
      <View className="index">
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Adddddaaa Async</Button>
        <Text>{counter}</Text>
      </View>
    );
  }
}

export default Index;
