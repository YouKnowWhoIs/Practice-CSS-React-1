import { useState } from "react";
import "../../style/inputResult/inputResult.css";
import InputField from "./InputField";

function InputResult() {
  const [text, setText] = useState("");

  return (
    <div className="resultConteiner">
      <p>Показує введений текстс</p>
      <InputField setText={setText} text={text} />
      <p className="resultText">{text}</p>
    </div>
  );
}

export default InputResult;
