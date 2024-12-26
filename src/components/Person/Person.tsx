import ImageView from "../ImageView/ImageView";
import "./Person.scss";

interface IPerson {
  imageUrl: string;
  name: string;
  position: string;
}

const Person = ({ imageUrl, name, position }: IPerson) => {
  return (
    <div className="person-container custom-hover-effect">
      <ImageView src={imageUrl} alt={name} className="person-img" />
      <p className="person-name">{name}</p>
      <p className="person-position">{position}</p>
    </div>
  );
};

export default Person;
