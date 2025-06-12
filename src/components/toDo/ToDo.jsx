import "../../style/toDo/toDo.css";
import { useState } from "react";
import ErrorText from "../errorText/ErrorText.jsx";
import List from "./List.jsx";

function ToDo() {
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleInputQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleAddBtn = () => {
    if (query.trim() === "") {
      setIsError(true);
      return;
    }

    const newTask = {
      id: Date.now(),
      text: query,
    };

    setTasks([...tasks, newTask]);

    setQuery("");
    setIsError(false);
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="toDoConteiner">
      <p>Звичайний ту ду лист з видаленням без локал стору</p>
      <div className="queryConteiner">
        <input
          type="text"
          value={query}
          onChange={handleInputQuery}
          placeholder="Задачу"
        />
        <button type="button" className="addBtn" onClick={handleAddBtn}>
          Додати
        </button>
      </div>

      {isError && <ErrorText text="Поле Пусте!" />}

      <div className="ListConteiner">
        <ul className="list">
          {tasks.map((task) => (
            <List
              key={task.id}
              task={task}
              handleDeleteTask={handleDeleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
