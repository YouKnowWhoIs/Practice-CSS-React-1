import "../../style/toDo/list.css";

function List({ task, handleDeleteTask }) {
  return (
    <li id={task.id} className="listItems">
      <div className="textContent">
        <p>{task.text}</p>
      </div>
      <button type="button" onClick={() => handleDeleteTask(task.id)}>
        Видалити
      </button>
    </li>
  );
}

export default List;
