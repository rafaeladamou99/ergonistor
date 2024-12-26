import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../../api-service/useApiService";
import { Service as IService } from "../../../types/types";
import { ImageSlider } from "../../ImageSlider/ImageSlider";

const Service = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { get, data } = useApi<IService>(`/service/${serviceId}`);

  const sliderImgs = useMemo(() => {
    const imgArr: string[] = [];
    data?.img1 && imgArr.push(data.img1);
    data?.img2 && imgArr.push(data.img2);
    data?.img3 && imgArr.push(data.img3);
    data?.img4 && imgArr.push(data.img4);
    data?.img5 && imgArr.push(data.img5);
    return imgArr.map((img) => ({
      url: img,
      alt: img,
    }));
  }, [data]);

  useEffect(() => {
    get();
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
      <ImageSlider images={sliderImgs} />
      <div className="app-container w-auto flex flex-col items-start gap-4">
        <div className="w-full max-w-[500px] text-4xl self-baseline">
          {data?.title}
        </div>
        <div className="flex flex-col gap-3 text-xl justify-start p-4">
          {data?.paragraphs?.map((paragraph) => <span>{paragraph}</span>)}
        </div>
      </div>
    </div>
  );
};

export default Service;
