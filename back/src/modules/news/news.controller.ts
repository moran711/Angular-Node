import newsService from './news.service';
import {INewsInput} from './news.interfaces';

class NewsController {
  async addNews(news: INewsInput, userId: number) {
    return await newsService.addNews(news, userId);
  }

  async getNewsById(_id: string) {
    return await newsService.getNewsById(_id);
  }
  async getAllNews() {
    return await newsService.getAllNews();
  }
}

export default new NewsController();
