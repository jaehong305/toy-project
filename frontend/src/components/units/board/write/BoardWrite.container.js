import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import BoardWriteUI from './BoardWrite.presenter';

export default function BoardWrite({ isEdit }) {
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [isActive, setIsActive] = useState(false);

  const onChangeTitle = event => {
    setTitle(event.target.value);
    if (event.target.value && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeContent = event => {
    setContent(event.target.value);
    if (title && event.target.value) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        // cmd + i
        variables: {
          createBoardInput: {
            title,
            content,
          },
        },
      });
      router.push(`/board/${result.data.createBoard.id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickEdit = async () => {
    await updateBoard({
      variables: {
        id: router.query.id,
        updateBoardInput: {
          title,
          content,
        },
      },
    });
    router.push(`/board/${router.query.id}`);
  };

  return (
    <BoardWriteUI
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      isActive={isActive}
      isEdit={isEdit}
    />
  );
}
