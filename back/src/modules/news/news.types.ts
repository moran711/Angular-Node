const newsInputs = `
  input NewsInput {
    title: String!
    text: String!
  }
`;

const newsTypes = `
  type News {
    _id: String
    author: User
    title: String
    text: String
    dateOfCreation: String
  }
`;

export {newsTypes, newsInputs};
