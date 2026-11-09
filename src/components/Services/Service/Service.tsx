import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../../api-service/useApiService";
import { Service as IService } from "../../../types/types";

const Service = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { get, data } = useApi<IService>(`/service/${serviceId}`);

  useEffect(() => {
    get();
  }, []);

  return (
    <div className="app-container flex flex-col items-start gap-4">
      <div className="w-full max-w-[500px] text-4xl self-baseline">
        {data?.title}
      </div>
      <div className="flex flex-col gap-3 text-xl justify-start p-4">
        {data?.paragraphs?.map((paragraph) => <span>{paragraph}</span>)}
      </div>
    </div>
  );
};

export default Service;
