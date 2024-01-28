/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./surveillanceCameras.scss";
import { Card } from "../../components/ui/card";
import CamsService from "../../services/cams.service";
import { MockDataType } from "../../mockData";

export const SurveillanceCamerasPage = () => {
  const [activeButton, setActiveButton] = useState("Домашние камеры");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const { data: cams, error, isLoading } = useQuery({
    queryKey: ["cams"],
    queryFn: () => CamsService.getCams(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error)
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="surveillanceCameras-container">
      <div className="surveillanceCameras-logo">
        <img
          src="surveillance-cameras.png"
          style={{
            height: "391px",
          }}
        />
      </div>
      <div className="button-container-secondPage">
        <div
          className={`button-text ${
            activeButton === "Домашние камеры"
              ? "button-text-active"
              : "button-text-nonactive"
          }`}
          onClick={() => handleButtonClick("Домашние камеры")}
        >
          Домашние камеры
        </div>
        <div
          className={`button-text ${
            activeButton === "Уличные камеры"
              ? "button-text-active"
              : "button-text-nonactive"
          }`}
          onClick={() => handleButtonClick("Уличные камеры")}
        >
          Уличные камеры
        </div>
        <div
          className={`button-text ${
            activeButton === "Беспроводные камеры"
              ? "button-text-active"
              : "button-text-nonactive"
          }`}
          onClick={() => handleButtonClick("Беспроводные камеры")}
        >
          Беспроводные камеры
        </div>
        <div
          className={`button-text ${
            activeButton === "Аксессуары"
              ? "button-text-active"
              : "button-text-nonactive"
          }`}
          onClick={() => handleButtonClick("Аксессуары")}
        >
          Аксессуары
        </div>
      </div>
      {activeButton === "Домашние камеры" && (
        <div>
          <div className="homeCam">
            <img src="homeCam.png" />
          </div>
          <div className="card-container">
            {cams?.map((item: MockDataType) => (
              <Card
                img={item.img}
                description={item.description}
                title={item.title}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
