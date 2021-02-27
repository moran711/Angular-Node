export interface INews {
  _id?: string;
  author: string;
  title: string;
  text: string;
  dateOfCreation: Date;
}

export interface INewsInput {
  image: string;
  title: string;
  text: string;
}
