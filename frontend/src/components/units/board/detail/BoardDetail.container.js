import { GET_BOARD } from './BoardDetail.queries';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import BoardDetailUI from './BoardDetail.presenter';

export default function BoardDetail() {
  const router = useRouter();

  const { data } = useQuery(GET_BOARD, {
    variables: { id: router.query.id },
  });

  const onClickMoveToEdit = () => {
    router.push(`/board/${router.query.id}/edit`);
  };

  return <BoardDetailUI data={data} onClickMoveToEdit={onClickMoveToEdit} />;
}
