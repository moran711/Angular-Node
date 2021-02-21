export const GET_ALL_NEWS: string = `
  query {
    getAllNews {
      _id
      text
      title
      dateOfCreation
      author {
        lastName
        firstName
        _id
        email
      }
    }
  }
`;
