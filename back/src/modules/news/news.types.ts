const newsInputs = `
  input NewsInput {
    title: String!
    text: String!
    image: String!
  }
`;

const newsTypes = `
  type News {
    _id: String
    author: User
    title: String
    text: String
    image: String
    dateOfCreation: String
  }
`;

export {newsTypes, newsInputs};
