import { ContentProp } from "../../types/types";
import Person from "../Person/Person";
import "./About.scss";

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
