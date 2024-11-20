import ItemCard from "../ItemCard/ItemCard";
import car1 from "../Home/imgs/car-2.jpg";
import "./Services.scss";
import { ContentProp, Service } from "../../types/types";
import useApi from "../../api-service/useApiService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Services = ({ content }: ContentProp) => {
  const navigate = useNavigate();
  const { data, get } = useApi<Service[], undefined>("service");

  const openService = (id: string) => () => {
    navigate(id);
  };

  useEffect(() => {
    get();
  }, []);
  return (
    <div className="app-container services-page">
      <div className="welcome-title">{content?.services.title}</div>
      <p className="welcome-msg">{content?.services.msg}</p>
      <div className="services-container">
        <div className="services-container-title">
          {content?.services.subtitle}
        </div>
        <div className="services-container-content">
          {data?.map(({ _id, img, paragraphs, title }, index) => (
            <ItemCard
              imageUrl={img}
              title={title}
              description={paragraphs?.[0] ?? ""}
              onClick={openService(_id)}
              className="animate pop"
              style={{ animationDelay: `${index * 0.4}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
