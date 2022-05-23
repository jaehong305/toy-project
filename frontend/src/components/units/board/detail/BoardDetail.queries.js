import { gql } from '@apollo/client';

export const GET_BOARD = gql`
  query getBoard($id: String!) {
    getBoard(id: $id) {
      id
      title
      content
      createdAt
      updatedAt
    }
  }
`;
