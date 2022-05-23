import * as S from './BoardList.styles';
import { getMyDate } from '../../../../commons/libraries/utils';

export default function BoardListUI({ data, onClickMoveToBoardNew, onClickMoveToBoardDetail }) {
  return (
    <>
      <div>
        {data?.getBoards.boards.map(el => (
          <S.Row key={el.id}>
            <S.Column id={el.id} onClick={onClickMoveToBoardDetail}>
              {el.title}
            </S.Column>
            <S.Column>{getMyDate(el.createdAt)}</S.Column>
          </S.Row>
        ))}
      </div>
      <button onClick={onClickMoveToBoardNew}>글쓰기</button>
    </>
  );
}
