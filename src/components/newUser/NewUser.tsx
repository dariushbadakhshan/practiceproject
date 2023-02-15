import { FC } from "react";
// components import
import UserForm from "./UserForm";

//type manage
type props = {
  onAddUser: (userData: {
    id: string;
    userName: string;
    userAge: number;
  }) => void;
};
// main component
const NewUser: FC<props> = ({ onAddUser }) => {
  // event managing
  const saveUserHandler = (enteredUserData: {
    userName: string;
    userAge: number;
  }) => {
    // storing recived data from UserForm
    const userData = { ...enteredUserData, id: Math.random().toString() };
    onAddUser(userData);
  };

  // return JSX block
  return (
    <div>
      <UserForm onSaveUser={saveUserHandler} />
    </div>
  );
};
export default NewUser;
