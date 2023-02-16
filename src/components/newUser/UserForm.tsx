import { ChangeEvent, FormEvent, useState, FC } from "react";

//import components
import Button from "./UI/Button";
import Form from "./UI/Form";

// declare types
type props = {
  onSaveUser: (enteredUserData: { userName: string; userAge: number }) => void;
};

// main component
const UserForm: FC<props> = ({ onSaveUser }) => {
  // state managing
  const [enteredUserName, setUEnteredUserName] = useState<string>("");

  const [EnteredUserAge, setEnteredUserAge] = useState<number>(0);

  // input value managing
  const usernameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredUserAge(Number(event.target.value));
  };

  //form managing
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredUserData = {
      userName: enteredUserName,
      userAge: EnteredUserAge,
    };
    // passing Stored userData to NewUser component
    onSaveUser(enteredUserData);
    // reset username and age in form
    setUEnteredUserName("");
    setEnteredUserAge(0);
  };

  // return JSX block
  return (
    <Form>
      <form onSubmit={submitHandler}>
        <label htmlFor="userName">Username</label>
        <input
          id="userName"
          type="text"
          value={enteredUserName}
          onChange={usernameChangeHandler}
        />

        <label htmlFor="UserAge">Age</label>
        <input
          id="userAge"
          type="number"
          value={EnteredUserAge > 0 ? EnteredUserAge : ""}
          onChange={ageChangeHandler}
        />

        <Button type="submit">Add User</Button>
      </form>
    </Form>
  );
};
export default UserForm;
