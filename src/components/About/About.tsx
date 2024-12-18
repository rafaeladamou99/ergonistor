import "./About.scss";
import Steps from "../Home/imgs/Steps.png";
import car1 from "../Home/imgs/car-1.jpg";
import Person from "../Person/Person";
import { ContentProp } from "../../types/types";

const About = ({ content }: ContentProp) => {
  return (
    <div className="app-container about-page">
      <div className="welcome-title">{content?.about.title}</div>
      <p className="welcome-msg">{content?.about.msg}</p>
      <div className="about-container">
        {content?.about.sections.map((section) => (
          <>
            <div className="about-container-title">{section.title}</div>
            {section.paragraphs.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </>
        ))}
        {/* <div className="about-container-title">
          HOW WE OPERATE AND BRING OUR WORK INTO REALITY
        </div>
        <img
          key={Steps}
          src={Steps}
          className="img-slider-img"
          style={{ marginTop: "20px" }}
        /> */}
        {/* <div className="about-container-title">{content?.about.key_people}</div> */}
        <div className="w-full mt-5 flex gap-6 justify-center flex-wrap items-start">
          {content?.about.key_people.map((person) => (
            <Person
              imageUrl={person.img}
              name={person.name}
              position={person.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
