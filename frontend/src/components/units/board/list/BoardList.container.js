import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_BOARDS } from './BoardList.queries';
import BoardListUI from './BoardList.presenter';

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(GET_BOARDS, {
    variables: {
      page: 1,
    },
  });

  // const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickMoveToBoardNew = () => {
    router.push('/board/new');
  };
  const onClickMoveToBoardDetail = event => {
    router.push(`/board/${event.target.id}`);
  };

  // const onClickDelete = event => {
  //   deleteBoard({
  //     variables: {
  //       id: event.target.id,
  //     },
  //     refetchQueries: [{ query: GET_BOARDS, variables: { page: 1 } }],
  //   });
  // };

  return (
    <>
      <BoardListUI
        data={data}
        onClickMoveToBoardNew={onClickMoveToBoardNew}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      />
    </>
  );
}
