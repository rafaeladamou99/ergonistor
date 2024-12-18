import { useEffect, useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import TripOriginOutlinedIcon from "@mui/icons-material/TripOriginOutlined";
import "./ImageSlider.scss";
import Button, { EButtonType } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
  message?: string;
};

const DELAY = 10000;

export const ImageSlider = ({ images, message = "" }: ImageSliderProps) => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index >= images.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  const navigateToProjects = () => {
    navigate("/projects");
  };

  const navigateToContactUs = () => {
    navigate("/contact");
  };

  useEffect(() => {
    const slideInterval = setInterval(showNextImage, DELAY);

    return () => clearInterval(slideInterval);
  }, [imageIndex, showNextImage]);
  return (
    <section
      aria-label="Image Slider"
      //   style={{ width: "100%", height: "100%", position: "relative" }}
      className="slider-container animate pop"
    >
      <div
        // style={{
        //   width: "100%",
        //   height: "100%",
        //   display: "flex",
        //   overflow: "hidden",
        // }}
        className="images-container"
      >
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBackOutlinedIcon aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowForwardOutlinedIcon aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <TripOriginOutlinedIcon aria-hidden />
            ) : (
              <CircleOutlinedIcon aria-hidden />
            )}
          </button>
        ))}
      </div>
      {message && (
        <div className="img-info-label flex flex-col items-center justify-center absolute animate pop delay-4 max-lg:hidden">
          <p>{message}</p>
          <Button type={EButtonType.secondary} onClick={navigateToProjects}>
            Projects
          </Button>
          <Button type={EButtonType.primary} onClick={navigateToContactUs}>
            Contact Us
          </Button>
        </div>
      )}
    </section>
  );
};
