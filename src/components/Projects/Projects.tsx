import { useEffect } from "react";
import useApi from "../../api-service/useApiService";
import { ContentProp, Project } from "../../types/types";
import Button, { EButtonType } from "../Button/Button";
import { IDropDownItems } from "../DropDown/DropDown";
import ItemCard from "../ItemCard/ItemCard";
import "./Projects.scss";
import { useNavigate } from "react-router-dom";

const Projects = ({ content }: ContentProp) => {
  const navigate = useNavigate();

  const { data, get } = useApi<Project[], undefined>("project");

  const openProject = (id: string) => () => {
    navigate(id);
  };

  const navigateToContactUs = () => {
    navigate("/contact");
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="app-container projects-page">
      <div className="welcome-title">{content?.projects.title}</div>
      <p className="welcome-msg">{content?.projects.msg}</p>
      <div className="projects-container">
        <div className="projects-container-title">
          {content?.projects.subtitle}
        </div>
        <div className="projects-container-content">
          {data?.map(({ _id, img, paragraphs, title }, index) => (
            <ItemCard
              imageUrl={img}
              title={title}
              description={paragraphs?.[0] ?? ""}
              onClick={openProject(_id)}
              className="animate pop"
              style={{ animationDelay: `${index * 0.4}s` }}
            />
          ))}
        </div>
      </div>
      <Button type={EButtonType.primary} onClick={navigateToContactUs}>
        Contact Us
      </Button>
    </div>
  );
};

export default Projects;
