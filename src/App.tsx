import { useState } from "react";

//import components
import NewUser from "./components/newUser/NewUser";
import Users from "./components/users/Users";

//import css
import style from "./App.module.css";

//main component
function App() {
  //state managing
  const [users, setUsers] = useState<
    { id: string; userName: string; userAge: number }[]
  >([]);

  // event managing
  const addUserHandler = (userData: {
    id: string;
    userName: string;
    userAge: number;
  }) => {
    setUsers((prevUsers) => {
      return [userData, ...prevUsers];
    });
  };

  // return JSX block
  return (
    <div className={style.App}>
      <NewUser onAddUser={addUserHandler} />
      <Users users={users} />
    </div>
  );
}

export default App;
