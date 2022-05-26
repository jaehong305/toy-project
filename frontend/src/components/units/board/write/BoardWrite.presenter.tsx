import { MyInput, MyButton } from './BoardWrite.styles';

export default function BoardWriteUI({
  onChangeTitle,
  onChangeContent,
  onClickSubmit,
  onClickUpdate,
  isActive,
  isEdit,
  data,
}) {
  return (
    <>
      <h1>{isEdit ? '수정하기' : '등록하기'}</h1>
      제목: <MyInput type="text" onChange={onChangeTitle} defaultValue={data?.getBoard.title} />
      내용: <MyInput type="text" onChange={onChangeContent} defaultValue={data?.getBoard.content} />
      <MyButton onClick={isEdit ? onClickUpdate : onClickSubmit} color="red" isActive={isEdit || isActive}>
        {isEdit ? '수정' : '등록'}
      </MyButton>
    </>
  );
}
