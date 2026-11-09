import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../../api-service/useApiService";
import { ContentProp, Service } from "../../types/types";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import "./ServicesCategories.scss";

const ServicesCategory = ({ content }: ContentProp) => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: string }>();
  const { data, get } = useApi<Service[], undefined>(
    `service?category=${category}`,
  );

  const openService = (id: string) => () => {
    navigate(`/services/${id}`);
  };

  useEffect(() => {
    get();
  }, []);
  return (
    <div className="app-container services-page">
      <div className="welcome-title">{content?.services.title}</div>
      <p className="welcome-msg text-xl">{content?.services.msg}</p>
      <div className="services-container">
        <div className="services-container-title">
          {content?.services.subtitle}
        </div>
        <div className="services-container-content categories">
          {data?.map(({ _id, title }, index) => (
            <CategoriesCard
              key={_id}
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

export default ServicesCategory;
