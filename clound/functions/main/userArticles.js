const article = require('./models/article');

const getUserArticles = async ({ event, _openid, db }) => {
  const { page = 1, pageSize = 10 } = event;
  const userCollection = await db.collection('articles').where({
    _openid
  });

  const total = await userCollection.count();
  const data = await userCollection
    .field(article)
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .get();

  return {
    data: data.data,
    total: total.total,
    currentPage: page,
    pageSize
  };
};

const addUserArticle = async ({ event, _openid, db }) => {
  const { title, content } = event;
  const res = await db.collection('articles').add({
    data: {
      _openid,
      title,
      content,
      createTime: db.serverDate()
    }
  });
  return {
    data: res._id
  };
};

module.exports = {
  getUserArticles,
  addUserArticle
};
