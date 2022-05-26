import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { GET_BOARD } from '../../../../src/components/units/board/detail/BoardDetail.queries';
import BoardWrite from '../../../../src/components/units/board/write/BoardWrite.container';

export default function BoardEditPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery(GET_BOARD, {
    variables: {
      id,
    },
  });

  return <BoardWrite isEdit={true} data={data} />;
}
