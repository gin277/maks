import "./card.scss";

type CardType = {
  img: string;
  title: string;
  description: string;
};

export const Card = ({ img, description, title }: CardType) => {
  return (
    <div className="card">
      <div className="card-container">
        <img src={img} />
        <div key="title" className="card-title">
          {title}
        </div>
        <div key="description" className="card-description">
          {description}
        </div>
        <div key="about-button" className="about-button">
          Подробнее
        </div>
      </div>
    </div>
  );
};
