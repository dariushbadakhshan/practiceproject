import { FC } from "react";

type props = {
  userName: string;
  userAge: number;
};

const UserItem: FC<props> = ({ userName, userAge }) => {
  return (
    <li>
      <p>{`Username: ${userName}`} </p>
      <p>{`Age: ${userAge} years old`}</p>
    </li>
  );
};
export default UserItem;
