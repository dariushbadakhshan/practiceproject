import styled from "styled-components";

const Form = styled.div`
  width: 22.25rem;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color: rgba(162, 123, 144, 0.6);
  
  & form {
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    padding: 60px 20px 60px 20px;
    border: 1px solid rgba(124, 86, 107, 0.5);
    border-radius: 10px ;
  }
  
  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color:#5e4151;
  }
  
  & input {
    font: inherit;
    display: block;
    border: 1px solid rgba(124, 86, 107, 0.5);
    padding: 0.30rem;
    margin-bottom: 1rem;
    border-radius: 5px;

  }
  
  & input:focus {
    outline: none;
    border-color: #7C566B;
 
`;
export default Form;
