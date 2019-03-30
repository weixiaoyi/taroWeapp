const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();

exports.main = async () => {
  const wxContext = cloud.getWXContext();
  const res = await db.collection('articles').get();
  return res;
  // db.collection('articles')
  //   .add({
  //     data: {
  //       _openId: '123',
  //       title: 'me'
  //     }
  //   })
  //   .then(() => {
  //     db.collection('articles')
  //       .get()
  //       .then(res => {
  //         return {
  //           data: res
  //         };
  //       })
  //       .catch(err => {
  //         return {
  //           me: 'hhaha'
  //         };
  //       });
  //   });

  // return {
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID
  // };
};
