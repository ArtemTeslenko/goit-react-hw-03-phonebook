import styled from 'styled-components';

export const List = styled.ul``;

export const ContactItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ContactItemWrapper = styled.div`
  display: flex;
  max-width: 280px;
  justify-content: space-between;
`;

export const DeleteBtn = styled.button`
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #343434;
  transition: 300ms;
  background-color: #ffffff;

  &:hover,
  focus {
    background-color: #696969;
    color: #ffffff;
    border: 1px solid transparent;
    outline: 1px solid #242424;
  }
`;
