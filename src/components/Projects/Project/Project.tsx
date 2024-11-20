import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../../api-service/useApiService";
import { Project as IProject } from "../../../types/types";

const Project = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const { get, data } = useApi<IProject>(`/project/${projectId}`);

  useEffect(() => {
    get();
  }, []);
  return (
    <div className="w-auto flex flex-col items-start gap-4">
      <img
        key={data?.img}
        src={data?.img}
        alt={data?.img}
        className="item-card-img w-full aspect-video"
      />
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

export default Project;
