import styled from "styled-components";

const Button = styled.button`
  width: 80%;
  align-self: center;
  margin-top: 1rem;
  font: inherit;
  border: 1px solid #5e4151;
  background: #5e4151;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px 5px 5px 5px;

  &:hover,
  &:active {
    background: #7c566b;
    border-color: #7c566b;
  }

  &:focus {
    outline: none;
  }
`;
export default Button;
