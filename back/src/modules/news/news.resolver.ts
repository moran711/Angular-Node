import newsController from './news.controller';

const newsQuery = {
  getAllNews: () => newsController.getAllNews(),
  getNewsById: (parent, args) => newsController.getNewsById(args.id),
};

const newsMutation = {
  addNews: async (parent, args, context) =>
    newsController.addNews(args.data, args.image,context.user.id),
};

export {newsMutation, newsQuery};
