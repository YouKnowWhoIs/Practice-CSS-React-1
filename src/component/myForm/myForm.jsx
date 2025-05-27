import "../../style/myForm/myForm.css";
import { useState } from "react";
import ErrorText from "../errorText/ErrorText.jsx";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleInputName = (e) => {
    setName(e.target.value);
    if (nameError) setNameError(false);
  };

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNameValid = name.trim().length > 2;
    const isEmailValid = email.trim() !== "" && email.includes(".");

    if (!isNameValid) {
      setNameError(true);
      return;
    }

    if (!isEmailValid) {
      setEmailError(true);
      return;
    }

    setSubmittedName(name);
    setSubmittedEmail(email);
    setSuccessful(true);
    setName("");
    setEmail("");
    setNameError(false);
    setEmailError(false);

    console.log(name, email);
  };

  return (
    <div className="containerForm">
      <p>Проста форма валідації ім'я та емейла</p>
      <form id="myForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleInputName}
          placeholder="Ведіть ім'я"
        />
        {nameError && <ErrorText text="Ім'я обов'язкове і не меньше 3 літр!" />}
        <input
          type="email"
          value={email}
          onChange={handleInputEmail}
          placeholder="Ведiть емейл"
        />
        {emailError && <ErrorText text="Пошта обов'язкова!" />}
        <button type="submit">Продовжити</button>
      </form>
      {successful && (
        <div className="successfulTextForm">
          <p>Успіх! Ваші дані:</p>
          <p>
            Ім'я: {submittedName}, Емейл: {submittedEmail}
          </p>
        </div>
      )}
    </div>
  );
}

export default MyForm;
