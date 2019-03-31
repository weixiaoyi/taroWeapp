const cloud = require('wx-server-sdk');
const userArticles = require('./userArticles');
cloud.init({
  env: 'test-cc74d8',
  traceUser: true
});
const db = cloud.database();

exports.main = async event => {
  const wxContext = cloud.getWXContext();
  const { OPENID: _openid } = wxContext;
  const params = { event, _openid, db };
  switch (event.method) {
    case 'getUserArticles': {
      return await userArticles.getUserArticles(params);
    }

    case 'addUserArticle': {
      return await userArticles.addUserArticle(params);
    }
  }
};
