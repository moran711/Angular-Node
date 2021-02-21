export interface INews {
  _id?: string;
  author: string;
  title: string;
  text: string;
  dateOfCreation: Date;
}

export interface INewsInput {
  title: string;
  text: string;
}
