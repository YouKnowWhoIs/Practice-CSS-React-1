import "../../style/userList/userCard.css";

function UserCard({ name, age, img }) {
  return (
    <li className="userCard">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <img alt="avatar" src={img} />
    </li>
  );
}

export default UserCard;
