import { MyInput, MyButton } from './BoardWrite.styles';

export default function BoardWriteUI({ onChangeTitle, onChangeContent, onClickSubmit, onClickEdit, isActive, isEdit }) {
  return (
    <>
      <h1>{isEdit ? '수정하기' : '등록하기'}</h1>
      제목: <MyInput type="text" onChange={onChangeTitle} />
      내용: <MyInput type="text" onChange={onChangeContent} />
      <MyButton onClick={isEdit ? onClickEdit : onClickSubmit} color="red" isActive={isActive} disabled={!isActive}>
        {isEdit ? '수정' : '등록'}
      </MyButton>
    </>
  );
}
