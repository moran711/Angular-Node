import newsService from './news.service';
import {INewsInput} from './news.interfaces';
import {ApolloError} from 'apollo-server';
import statusCodes from '../../consts/statusCose';
import {newsMessages} from './news.messages';

class NewsController {
  async addNews(news: INewsInput, upload:string, userId: number) {
    return await newsService.addNews(news, upload, userId);
  }

  async getNewsById(_id: string) {
    let news;
    try {
      news = await newsService.getNewsById(_id);
    } catch (e) {
      throw new ApolloError(newsMessages.NEWS_NOT_FOUND, statusCodes.NOT_FOUND);
    }

    if (!news) {
      throw new ApolloError(newsMessages.NEWS_NOT_FOUND, statusCodes.NOT_FOUND);
    }
    return news;
  }
  async getAllNews() {
    return await newsService.getAllNews();
  }
}

export default new NewsController();
