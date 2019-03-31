import Taro from '@tarojs/taro';
import { CloudConfig } from '../constants';
const cloud = Taro.cloud;
cloud.init(CloudConfig);

export const getUserArticles = async payload => {
  const res = await cloud.callFunction({
    name: 'main',
    data: {
      method: 'getUserArticles',
      ...payload
    }
  });
  return res;
};

export const addUserArticle = async payload => {
  const res = await cloud.callFunction({
    name: 'main',
    data: {
      method: 'addUserArticle',
      ...payload
    }
  });
  return res;
};
