import { ChangeEvent, FormEvent, useState, FC } from "react";

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
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>USERNAME</label>
          <input
            type="text"
            value={enteredUserName}
            onChange={usernameChangeHandler}
          />
        </div>
        <div>
          <label>AGE</label>
          <input
            type="number"
            value={EnteredUserAge > 0 ? EnteredUserAge : ""}
            onChange={ageChangeHandler}
          />
        </div>
      </div>
      <div>
        <button>ADD USER</button>
      </div>
    </form>
  );
};
export default UserForm;
