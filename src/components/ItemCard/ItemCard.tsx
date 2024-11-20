import { CSSProperties } from "react";
import "./ItemCard.scss";

interface IItemCard {
  imageUrl: string;
  title: string;
  description: string;
  onClick: () => void;
  className?: string;
  style?: CSSProperties;
}

const ItemCard = ({
  description,
  imageUrl,
  onClick,
  title,
  className,
  style,
}: IItemCard) => {
  return (
    <div
      className={`item-card-container cursor-pointer ${className ?? ""}`}
      onClick={onClick}
      style={style}
    >
      <img
        key={imageUrl}
        src={imageUrl}
        alt={imageUrl}
        className="item-card-img"
      />
      <div className="item-card-title"> {title}</div>
      <div className="item-card-description">{description}</div>
    </div>
  );
};

export default ItemCard;
