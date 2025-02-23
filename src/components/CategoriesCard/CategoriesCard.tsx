import { CSSProperties } from "react";
import Colors from "../../ColorsModule/Colors.module.scss";

type CategoriesCard = {
  title: string;
  onClick: () => void;
  style?: CSSProperties;
};

const CategoriesCard = ({ onClick, title, style }: CategoriesCard) => {
  return (
    <div
      className="custom-hover-effect animate pop w-full aspect-[4/1] border rounded-2xl border-gray-400 max-sm:text-2xl max-md:text-3xl max-lg:text-4xl lg:text-5xl p-4 text-center flex justify-center items-center"
      onClick={onClick}
      style={{
        color: Colors.secondary,
        ...style,
      }}
    >
      {title}
    </div>
  );
};

export default CategoriesCard;
