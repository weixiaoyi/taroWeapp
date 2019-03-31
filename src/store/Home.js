import Taro from '@tarojs/taro';
import { observable, action } from 'mobx';
import StoreExtend from './StoreExtend';
import { getArticles } from '../service';

class HomeStore extends StoreExtend {
  constructor(props) {
    super(props);
  }

  @observable userArticles = [];

  updateArticles = async ({ action }) => {
    const userInfo = this.getUserInfo();
    let res = [];
    switch (action) {
      case 'get':
        res = await getArticles();
    }
    if (res.data) {
      const data = res.data;
      this.changeModel('userArticles', data);
      return data;
    }
  };
}

export default HomeStore;
