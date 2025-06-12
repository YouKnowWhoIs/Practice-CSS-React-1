import "../../style/inputResult/inputFiels.css";

function InputField({ setText, text }) {
  const handleInputText = (e) => {
    setText(e.target.value);
  };

  const handleResetInput = () => {
    setText("");
  };

  return (
    <div className="inputFieldConteiner">
      <input
        type="text"
        placeholder="Введи текст"
        value={text}
        onChange={handleInputText}
      />
      <button type="button" onClick={handleResetInput}>
        Очистити
      </button>
    </div>
  );
}

export default InputField;
