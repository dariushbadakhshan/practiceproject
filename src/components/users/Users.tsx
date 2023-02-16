import { FC } from "react";

type props = {
  userName: string;
  userAge: number;
};
const Users: FC<props> = ({ userName, userAge }) => {
  return (
    <div>
      <h2>{`Username:${userName}`} </h2>
      <h2>{`Age: ${userAge} years old`}</h2>
    </div>
  );
};
export default Users;
