import { observable, action } from 'mobx';
import StoreExtend from './StoreExtend';
import { getUserArticles } from '../service';
import { resOk } from '../utils';

class HomeStore extends StoreExtend {
  constructor(props) {
    super(props);
  }

  @observable userArticles = [];

  updateArticles = async ({ action, page, pageSize = 10 }) => {
    let res = [];
    switch (action) {
      case 'get':
        res = await getUserArticles({ page, pageSize });
    }
    if (resOk(res)) {
      const data = res.result.data;
      console.log(res, '---data');
      this.changeModel('userArticles', data);
      return data;
    }
  };
}

export default HomeStore;
