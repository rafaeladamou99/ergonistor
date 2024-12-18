import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../api-service/useApiService";
import Button, { EButtonType } from "../../components/Button/Button";
import {
  ContentProp,
  Service,
  ServiceCategories,
  Slider,
} from "../../types/types";
import { ImageSlider } from "../ImageSlider/ImageSlider";
import ItemCard from "../ItemCard/ItemCard";
import "./Home.scss";

const Home = ({ content }: ContentProp) => {
  const navigate = useNavigate();

  const { data: servicesData, get: getServices } = useApi<
    ServiceCategories[],
    undefined
  >("service-categories");
  const {
    data: sliderData,
    get: getSlider,
    isSuccess: isSliderSuccess,
  } = useApi<[Slider], undefined>("slider");

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
    getServices();
    getSlider();
  }, []);

  useEffect(() => {
    setSliderImgs(
      (sliderData?.[0]?.imgs ?? []).map((url) => ({
        url,
        alt: url,
      })),
    );
  }, [sliderData]);

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
        <div className="welcome-title">{content?.home.title}</div>
        <p className="welcome-msg">{content?.home.msg}</p>
        {/* <Button type={EButtonType.primary} onClick={navigateToAboutUs}>
          About Us
        </Button> */}
        <div className="services-container">
          <div className="services-container-title">
            {content?.services.subtitle}
          </div>
          <div className="services-container-content">
            {servicesData?.map(({ _id, img, title, description }, index) => (
              <ItemCard
                imageUrl={img}
                title={title}
                description={description ?? ""}
                onClick={openService(_id)}
                className="animate pop"
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
