import { ChangeEvent, FormEvent, useState } from "react";

const UserForm = () => {
  // state managing
  const [userName, setUserName] = useState<string>("");

  const [userAge, setUserAge] = useState<number>();

  // input value managing
  const usernameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserAge(Number(event.target.value));
  };

  //form managing
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label>USERNAME</label>
          <input
            type="text"
            value={userName}
            onChange={usernameChangeHandler}
          />
        </div>
        <div>
          <label>AGE</label>
          <input type="number" value={userAge} onChange={ageChangeHandler} />
        </div>
      </div>
      <div>
        <button>ADD USER</button>
      </div>
    </form>
  );
};
export default UserForm;
