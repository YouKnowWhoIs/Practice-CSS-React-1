import "../../style/errorText/errorText.css";

function ErrorText({ text }) {
  return (
    <>
      <p id="errorText">{text}</p>
    </>
  );
}

export default ErrorText;
