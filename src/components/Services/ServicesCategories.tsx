import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../api-service/useApiService";
import { ContentProp, ServiceCategories } from "../../types/types";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import "./ServicesCategories.scss";

const Services = ({ content }: ContentProp) => {
  const navigate = useNavigate();
  const { data, get } = useApi<ServiceCategories[], undefined>(
    "service-categories",
  );

  const openService = (id: string) => () => {
    navigate(`/service-category/${id}`);
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
        <div className="services-container-content categories">
          {data?.map(({ _id, title }, index) => (
            <CategoriesCard
              title={title}
              onClick={openService(_id)}
              style={{ animationDelay: `${index * 0.4}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
