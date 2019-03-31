import Taro from '@tarojs/taro';
import { CloudConfig } from '../constants';
const cloud = Taro.cloud;
cloud.init(CloudConfig);

export const getUserArticles = async payload => {
  const res = await cloud.callFunction({
    // 要调用的云函数名称
    name: 'main',
    // 传递给云函数的参数
    data: {
      method: 'getUserArticles',
      ...payload
    }
  });
  return res;
};
