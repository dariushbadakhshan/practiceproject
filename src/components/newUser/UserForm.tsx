import { ChangeEvent, FormEvent, useState, FC } from "react";

//style components
import ErrorModal from "./ErrorModal";

//import components
import Button from "./UI/Button";
import AddUser from "./UI/AddUser";

// declare props types
type props = {
  onSaveUser: (enteredUserData: { userName: string; userAge: number }) => void;
};

// main component
const UserForm: FC<props> = ({ onSaveUser }) => {
  // states managing
  const [enteredUserName, setUEnteredUserName] = useState<string>("");

  const [enteredUserAge, setEnteredUserAge] = useState<number>(0);

  const [error, setError] = useState<{
    title: string;
    message: string;
  } | null>();

  // input value managing
  const usernameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredUserAge(Number(event.target.value));
  };

  //form submit managing
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    // handling input error
    if (enteredUserName.trim().length === 0 || enteredUserAge === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty value).",
      });
      return;
    }

    // storing data from states
    const enteredUserData = {
      userName: enteredUserName,
      userAge: enteredUserAge,
    };

    // passing Stored userData to NewUser component
    onSaveUser(enteredUserData);

    // reset username and age in form
    setUEnteredUserName("");
    setEnteredUserAge(0);
  };

  // handling Error modal onConfirm
  const errorHandler = () => {
    setError(null);
  };

  // return JSX block
  return (
    <AddUser>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

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
          value={enteredUserAge > 0 ? enteredUserAge : ""}
          onChange={ageChangeHandler}
        />

        <Button type="submit">Add User</Button>
      </form>
    </AddUser>
  );
};
export default UserForm;
