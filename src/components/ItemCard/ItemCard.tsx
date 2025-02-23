import { CSSProperties } from "react";
import ImageView from "../ImageView/ImageView";
import "./ItemCard.scss";

interface IItemCard {
  imageUrl: string;
  title: string;
  description?: string;
  onClick: () => void;
  className?: string;
  style?: CSSProperties;
  hideDescription?: boolean;
}

const ItemCard = ({
  description = "",
  imageUrl,
  onClick,
  title,
  className,
  style,
  hideDescription = false,
}: IItemCard) => {
  return (
    <div
      className={`rounded-2xl border border-gray-400 item-card-container cursor-pointer custom-hover-effect overflow-hidden ${className ?? ""}`}
      onClick={onClick}
      style={style}
    >
      <ImageView
        key={imageUrl}
        src={imageUrl}
        alt={imageUrl}
        className="item-card-img"
      />
      <div className={`item-card-title px-1 ${hideDescription ? "pb-1" : ""}`}>
        {title}
      </div>
      {!hideDescription && (
        <div className="item-card-description px-1 pb-1">{description}</div>
      )}
    </div>
  );
};

export default ItemCard;
