export const GET_ALL_NEWS: string = `
  query {
    getAllNews {
      _id
      text
      title
      image
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

export const ADD_NEWS: string = `
  mutation($data: NewsInput!) {
    addNews(data: $data) {
      _id
      text
      title
      dateOfCreation
      image
      author {
        lastName
        firstName
        _id
        email
      }
    }
  }
`;

export const GET_NEWS_BY_ID: string = `
  query($id: ID!) {
    getNewsById(id: $id) {
      _id
      text
      title
      image
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
