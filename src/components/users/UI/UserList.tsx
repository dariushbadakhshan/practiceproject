import styled from "styled-components";

const UserList = styled.div`
  margin-top: 2rem;
  width: 100%;
  flex: 1;
  max-width: 44.5rem;
  background-color: rgba(162, 123, 144, 0.6);
  & h2 {
    display: flex;
    justify-content: center;
    color: #5e4151;
    margin: 1rem 0 0 0;
  }
  & ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin: 0;
  }

  & li {
    display: flex;
    justify-content: space-around;
    flex-wrap: no-wrap;
    width: 85%;
    background-color: #7c566b;
    border: 1px solid #5e4151;
    border-radius: 5px 5px 5px 5px;
    margin: 0.5rem 0;
    padding: 0.25rem;
    & h3 {
      flex: 2 1 0;
    }
    & p {
      color: white;
      flex: 1 1 0;
      &:first-child {
        flex: 2 1 0;
      }
    }
  }
`;
export default UserList;
