import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import {configure} from 'mobx'
import Index from './pages/index'

import store from './store'

import './app.scss'



// 不允许在动作外部修改状态
configure({ enforceActions: 'always' })


class App extends Component {
  config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {
    // console.log(store.countStore,'--store')
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {

    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
