import "../../style/windowSize/WindowSize.css";
import { useEffect, useState } from "react";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [hight, setHight] = useState(window.innerHeight);

  useEffect(() => {
    const hendleResize = () => {
      setWidth(window.innerWidth);
      setHight(window.innerHeight);
    };

    window.addEventListener("resize", hendleResize);

    return () => {
      window.removeEventListener("resize", hendleResize);
    };
  }, []);

  return (
    <div className="widhtConteiner">
      <p>Поточна ширина екрана: {width}px</p>
      <p>Поточна висота екрана: {hight}px</p>
    </div>
  );
}

export default WindowSize;
