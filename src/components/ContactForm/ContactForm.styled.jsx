import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 300px;
  margin-bottom: 10px;
`;

export const AddContactBtn = styled.button`
  max-width: 120px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #343434;
  transition: 300ms;
  background-color: #ffffff;

  &:hover,
  focus {
    color: #ffffff;
    background-color: #696969;
    border: 1px solid transparent;
    outline: 1px solid #242424;
  }
`;
