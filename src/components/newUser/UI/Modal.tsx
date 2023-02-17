import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  z-index: 100;
  overflow: hidden;
  background: #eae0df;
  border-radius: 5px;

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const ModalHeader = styled.header`
  background: #a27b90;
  padding: 1rem;

  & h2 {
    margin: 0;
    color: white;
  }
`;
const ModalContent = styled.div`
  padding: 1rem;
`;
const ModalFooter = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: center;
`;
const ModalButton = styled.button`
  width: 50%;
  font: inherit;
  background: #5e4151;
  border: 1px solid #5e4151;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover,
  &:active {
    background: #7c566b;
    border-color: #7c566b;
  }

  &:focus {
    outline: none;
  }
`;
export { ModalHeader, ModalContent, ModalFooter, ModalButton };
export default Modal;
