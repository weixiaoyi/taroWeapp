import Taro, { Component } from '@tarojs/taro';
import '@tarojs/async-await';
import { Provider } from '@tarojs/mobx';
import { configure } from 'mobx';
import Login from './pages/login/login';

import store from './store';

import './app.scss';

// 不允许在动作外部修改状态
configure({ enforceActions: 'always' });

class App extends Component {
  config = {
    pages: ['pages/login/login'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
