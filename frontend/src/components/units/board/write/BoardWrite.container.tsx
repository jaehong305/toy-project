import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries';
import BoardWriteUI from './BoardWrite.presenter';
import { IMutation, IMutationCreateBoardArgs } from '../../../../commons/types/generated/types';

export default function BoardWrite({ isEdit, data }) {
  const router = useRouter();
  const { id } = router.query;
  const [createBoard] = useMutation<Pick<IMutation, 'createBoard'>, IMutationCreateBoardArgs>(
    CREATE_BOARD,
  );
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState('');
  const [isActive, setIsActive] = useState(false);

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (event.target.value && content) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
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

  const onClickUpdate = async () => {
    if (!title && !content) {
      alert('수정사항이 없습니다.');
      return;
    }

    interface IMyVariables {
      id: string | string[];
      updateBoardInput: {
        title?: string;
        content?: string;
      };
    }

    const myVariables: IMyVariables = {
      id,
      updateBoardInput: {},
    };
    if (title) myVariables.updateBoardInput.title = title;
    if (content) myVariables.updateBoardInput.content = content;

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
      onClickUpdate={onClickUpdate}
      isActive={isActive}
      isEdit={isEdit}
      data={data}
    />
  );
}
