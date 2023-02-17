import { FC } from "react";

//import component
import UserList from "./UI/UserList";
import UserItem from "./UserItem";

// declare props types
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
    <UserItem key={user.id} userName={user.userName} userAge={user.userAge} />
  ));
  return (
    <UserList>
      <h2>Users</h2>
      <ul>{renderUsers}</ul>
    </UserList>
  );
};
export default Users;
