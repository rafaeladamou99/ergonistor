import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../api-service/useApiService";
import Button, { EButtonType } from "../../components/Button/Button";
import { ContentProp, ServiceCategories, Slider } from "../../types/types";
import CategoriesCard from "../CategoriesCard/CategoriesCard";
import { ImageSlider } from "../ImageSlider/ImageSlider";
import "./Home.scss";

const Home = ({
  content,
  sliderData,
}: ContentProp & { sliderData: [Slider] | null }) => {
  const navigate = useNavigate();

  const { data: servicesData, get: getServices } = useApi<
    ServiceCategories[],
    undefined
  >("service-categories");

  const [sliderImgs, setSliderImgs] = useState<{ url: string; alt: string }[]>(
    [],
  );

  const openService = (id: string) => () => {
    navigate(`/service-category/${id}`);
  };

  const navigateToServices = () => {
    navigate("/services");
  };

  useEffect(() => {
    setSliderImgs(
      (sliderData?.[0]?.imgs ?? [])
        .filter((url) => !!url)
        .map((url) => ({
          url,
          alt: url,
        })),
    );
  }, [sliderData]);

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16 / 7",
        margin: "0 auto",
      }}
      className="h-fit"
    >
      <ImageSlider images={sliderImgs} message={sliderData?.[0]?.msg} />
      <div className="app-container home-page">
        <div className="welcome-title italic">{content?.home.title}</div>
        <div className="welcome-title italic">{content?.home.subtitle}</div>
        <p className="welcome-msg text-xl">{content?.home.msg}</p>
        <p className="welcome-msg text-xl">{content?.home.msg2}</p>
        <div className="services-container">
          <div className="services-container-title">
            {content?.services.subtitle}
          </div>
          <div className="services-container-content">
            {servicesData?.map(({ _id, title }, index) => (
              <CategoriesCard
                title={title}
                onClick={openService(_id)}
                style={{ animationDelay: `${index * 0.4}s` }}
              />
            ))}
          </div>
        </div>
        <Button type={EButtonType.primary} onClick={navigateToServices}>
          Services
        </Button>
      </div>
    </div>
  );
};

export default Home;
