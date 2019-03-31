const article = {
  _id: true,
  title: true,
  content: true,
  createTime: true,
  updateTime: true,
  votes: {
    up: true,
    down: true
  }
};
module.exports = article;
