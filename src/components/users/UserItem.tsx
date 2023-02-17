import { FC } from "react";

// declare props types
type props = {
  userName: string;
  userAge: number;
};

// main component
const UserItem: FC<props> = ({ userName, userAge }) => {
  return (
    <li>
      <p>{`Username: ${userName}`} </p>
      <p>{`Age: ${userAge} years old`}</p>
    </li>
  );
};
export default UserItem;
