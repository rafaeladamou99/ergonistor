import { useContext } from "react";
import ApiContext from "./ApiContext";

const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiContext must be used within an ApiProvider");
  }
  return context;
};

export default useApiContext;
