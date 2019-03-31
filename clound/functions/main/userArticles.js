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

module.exports = {
  getUserArticles
};
