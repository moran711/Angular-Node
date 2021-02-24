import newsModel from './news.model';
import {INewsInput} from './news.interfaces';

class NewsService {
  async addNews(data: INewsInput, image: string, userId: number) {
    const news = new newsModel({
      ...data,
      image,
      author: userId,
    });
    return await news.save();
  }

  async getNewsById(_id: string) {
    return await newsModel.findOne({_id}).exec();
  }
  async getAllNews() {
    return await newsModel.find();
  }
}

export default new NewsService();
