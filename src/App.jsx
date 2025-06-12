import "./style/App.css";
import UserList from "./components/userList/UserList.jsx";
import Counter from "./components/counter/Counter.jsx";
import MyForm from "./components/myForm/MyForm.jsx";
import ToDo from "./components/toDo/ToDo.jsx";
import DetailsToggle from "./components/detailsToggle/DetailsToggle.jsx";
import WindowSize from "./components/windowSize/WindowSize.jsx";
import InputResult from "./components/inputResult/InputResult.jsx";

function App() {
  return (
    <>
      <h1>Practice CSS/React 1</h1>
      <UserList />
      <Counter />
      <MyForm />
      <ToDo />
      <DetailsToggle />
      <WindowSize />
      <InputResult />
    </>
  );
}

export default App;
