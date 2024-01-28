import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./headerStyle.scss";

const buttons = [
  { name: "Главная", path: "/" },
  { name: "Умный дом", path: "/smart-house" },
  { name: "Камеры наблюдения", path: "/surveillance-cameras" },
  { name: "Услуги", path: "/services" },
];

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName: string, path: string) => {
    navigate(path);
    setActiveButton(buttonName);
  };

  useEffect(() => {
    // Обновляем активную кнопку при изменении пути
    const currentButton = buttons.find((button) => button.path === location.pathname);
    if (currentButton) {
      setActiveButton(currentButton.name);
    }
  }, [location.pathname]);

  return (
    <div className="header-container">
      <div className="header-logo">
        <img src="LOGO.svg" alt="Logo" onClick={() => handleButtonClick("Главная", "/")}/>
      </div>
      <div className="button-container">
        {buttons.map(({ name, path }) => (
          <div
            key={name}
            className={`header-button ${
              activeButton === name ? "header-button-active" : "header-button-nonactive"
            }`}
            onClick={() => handleButtonClick(name, path)}
          >
            {name}
          </div>
        ))}
      </div>
      <div className="social">
        <div className="social-container">
          {["twitter", "inst", "fb"].map((social) => (
            <div
              key={social}
              style={{
                cursor: "pointer",
              }}
            >
              <img
                src={`${social}.svg`}
                alt={social}
                className="social-icons"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
