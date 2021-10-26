import styled from 'styled-components';
export const InputContainer = styled.form`
display: grid;
padding: 20px;
width: 520px;
margin: 2px auto;
grid-template-columns: auto 100px;
grid-gap: 5px;

`
export const ToDoListHolder = styled.div`

border-style: groove;
display: grid;
padding: 20px;
width: 520px;
margin: 20px auto;
grid-template-columns: auto;
grid-gap: 5px;


`
export const Button = styled.button`
color: white;
border-radius: 4px 4px 4px 4px;
border: 1px solid #606060;
cursor:pointer;
background: ${props =>props.value ? "#4169E1": "#4169E1"};

font-size: 20px;

`

export const Input = styled.input`
padding: 14px 32px 14px 16px;
  border-radius: 4px 4px 4px 4px;
  border: 1px solid #606060;
  outline: none;
  width: 370px;
  background: ${props =>props.arg ? "#B6D0E2": "#CCCCFF"};
  color: black;
  font-size: 18px;
  }

`
