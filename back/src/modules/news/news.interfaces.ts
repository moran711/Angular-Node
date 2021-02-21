export interface INews {
  _id?: string;
  author: string;
  title: string;
  text: string;
}

export interface INewsInput {
  title: string;
  text: string;
}
