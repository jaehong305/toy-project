import { gql } from '@apollo/client';

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
      title
      content
      createdAt
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard($id: String!, $updateBoardInput: UpdateBoardInput!) {
    updateBoard(id: $id, updateBoardInput: $updateBoardInput) {
      id
      title
      content
      createdAt
    }
  }
`;
