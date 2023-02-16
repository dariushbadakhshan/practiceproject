//import components
import NewUser from "./components/newUser/NewUser";
//import css
import "./App.css";
//main component
function App() {
  // event managing
  const addUserHandler = (userData: {
    id: string;
    userName: string;
    userAge: number;
  }) => {};
  // return JSX block
  return (
    <div className="App">
      <NewUser onAddUser={addUserHandler} />
    </div>
  );
}

export default App;
