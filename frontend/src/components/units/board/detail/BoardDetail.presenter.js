import { getMyDate } from '../../../../commons/libraries/utils';

export default function BoardDetailUI({ data, onClickMoveToEdit }) {
  return (
    <>
      <div>제목: {data?.getBoard?.title}</div>
      <div>내용: {data?.getBoard?.content}</div>
      <div>작성일: {getMyDate(data?.getBoard?.createdAt)}</div>
      <button onClick={onClickMoveToEdit}>수정</button>
    </>
  );
}
