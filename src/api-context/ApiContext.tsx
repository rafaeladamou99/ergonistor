import { createContext, useContext } from "react";
import { Content } from "../types/types";

interface ApiContextType {
  data?: Content;
  loading: boolean;
  error: boolean;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export default ApiContext;
