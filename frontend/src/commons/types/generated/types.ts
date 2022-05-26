export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type IBoard = {
  __typename?: 'Board';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ICreateBoardInput = {
  content: Scalars['String'];
  title: Scalars['String'];
};

export type IGetBoardsAndCount = {
  __typename?: 'GetBoardsAndCount';
  boards?: Maybe<Array<IBoard>>;
  count: Scalars['Int'];
};

export type IMutation = {
  __typename?: 'Mutation';
  createBoard: IBoard;
  deleteBoard: Scalars['Boolean'];
  updateBoard: Scalars['String'];
};


export type IMutationCreateBoardArgs = {
  createBoardInput: ICreateBoardInput;
};


export type IMutationDeleteBoardArgs = {
  id: Scalars['String'];
};


export type IMutationUpdateBoardArgs = {
  id: Scalars['String'];
  updateBoardInput: IUpdateBoardInput;
};

export type IQuery = {
  __typename?: 'Query';
  getBoard: IBoard;
  getBoards: IGetBoardsAndCount;
};


export type IQueryGetBoardArgs = {
  id: Scalars['String'];
};


export type IQueryGetBoardsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};

export type IUpdateBoardInput = {
  content?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};
