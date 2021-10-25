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
color: blue;

cursor:pointer;
background: ${props =>props.value ? "yellow": "green"};

font-size: 20px;

`

export const Input = styled.input`
//   font-size: 18px;
//   padding: 15px;
//   margin: 10px;
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #5d0cff;
  outline: none;
  width: 370px;
  background: ${props =>props.arg ? "#87984c": "papayawhip"};
  color: black;
  font-size: 18px;
  }

`
