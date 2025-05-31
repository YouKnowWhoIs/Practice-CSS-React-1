import "./style/App.css";
import UserList from "./component/userList/UserList.jsx";
import Counter from "./component/counter/Counter.jsx";
import MyForm from "./component/myForm/MyForm.jsx";
import ToDo from "./component/toDo/ToDo.jsx";
import DetailsToggle from "./component/detailsToggle/DetailsToggle.jsx";
import WindowSize from "./component/windowSize/WindowSize.jsx";

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
    </>
  );
}

export default App;
