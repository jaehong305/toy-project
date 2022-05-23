import { gql } from '@apollo/client';

export const GET_BOARDS = gql`
  query getBoards($page: Int) {
    getBoards(page: $page) {
      boards {
        id
        title
        content
        createdAt
      }
      count
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($id: String!) {
    deleteBoard(id: $id)
  }
`;
