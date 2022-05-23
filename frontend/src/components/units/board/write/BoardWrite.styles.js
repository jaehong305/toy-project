import styled from '@emotion/styled';

export const MyInput = styled.input``;
export const MyButton = styled.button`
  background-color: ${props => (props.isActive ? '#fff' : 'none')};
  cursor: ${props => (props.isActive ? 'pointer' : 'default')};
`;
