import users from "./users.js";
import "../../style/userList/userList.css";
import UserCard from "./UserCard.jsx";

function UserList() {
  return (
    <div id="userList">
      <p>Звичайний масив юзерів які відображаються</p>
      <ul>
        {users.map((item) => (
          <UserCard
            key={item.id}
            name={item.name}
            age={item.age}
            img={item.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default UserList;
