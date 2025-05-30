import "../../style/detailsToggle/detailsToddle.css";
import { useState } from "react";
import HiddenText from "./HiddenText.jsx";

function DetailsToggle() {
  const [isHidden, setIsHidden] = useState(false);

  const handleOpenDetailText = () => {
    isHidden ? setIsHidden(false) : setIsHidden(true);
  };

  return (
    <div className="conteinerDetails">
      <p>При натискані на кнопку з'являється та ховаеться блок з текстом</p>
      <button type="button" onClick={handleOpenDetailText}>
        {isHidden ? "Приховати" : "Показати"}
      </button>
      {isHidden && <HiddenText />}
    </div>
  );
}

export default DetailsToggle;
