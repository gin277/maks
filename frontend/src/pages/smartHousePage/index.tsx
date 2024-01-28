/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./smartHouse.scss";
import { Card } from "../../components/ui/card";
// import { MockDataType, smartHouse } from "../../mockData";
import { useQuery } from "@tanstack/react-query";
import SmartHouseService from "../../services/smarhouse.service"
import { MockDataType } from "../../mockData";

export const SmartHousePage = () => {
  const [activeButton, setActiveButton] = useState("Приборы для умного дома");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const { data: smartHouse, error, isLoading } = useQuery({
    queryKey: ["smartHouse"],
    queryFn: () => SmartHouseService.getSmartHouse(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <div className="smartHouse-container">
      <div className="smartHouse-logo">
        <img
          src="smart-house.png"
          style={{
            height: "393px",
          }}
        />
      </div>
      <div className="button-container-secondPage">
        <div
          className={`button-text ${
            activeButton === "Приборы для умного дома"
              ? "button-text-active"
              : "button-text-nonactive"
          }`}
          onClick={() => handleButtonClick("Приборы для умного дома")}
        >
          Приборы для умного дома
        </div>
      </div>
      {activeButton === "Приборы для умного дома" && (
        <div>
          <div className="gadjet-smart-house">
            <img src="gadjet-smart-house.png" />
          </div>
          <div className="card-container">
            {smartHouse?.map((item: MockDataType) => (
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
