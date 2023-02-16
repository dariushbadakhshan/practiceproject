import { FC } from "react";
//import component
import UserList from "./UI/UserList";

//managing types
type props = {
  users: {
    id: string;
    userName: string;
    userAge: number;
  }[];
};

// main component
const Users: FC<props> = ({ users }) => {
  const renderUsers = users.map((user) => (
    <ul>
      <li>
        <h2>{`Username:${user.userName}`} </h2>
        <h2>{`Age: ${user.userAge} years old`}</h2>
      </li>
    </ul>
  ));
  return <UserList>{renderUsers}</UserList>;
};
export default Users;
