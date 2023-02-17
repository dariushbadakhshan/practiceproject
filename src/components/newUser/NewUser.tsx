import { FC } from "react";

// components import
import UserForm from "./UserForm";

//style components
import FormImage from "./UI/FormImage";
import Form from "./UI/Form";

//declare props types
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
    <Form>
      <FormImage />

      <UserForm onSaveUser={saveUserHandler} />
    </Form>
  );
};
export default NewUser;
