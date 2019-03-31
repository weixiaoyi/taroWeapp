import Taro from '@tarojs/taro';
Taro.cloud.init({
  traceUser: true
});
const db = Taro.cloud.database();

export const getArticles = async () => {
  const res = await db
    .collection('articles')
    .limit(10)
    .get();
  return res;
};
