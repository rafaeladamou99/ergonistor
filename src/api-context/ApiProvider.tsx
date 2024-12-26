import React, { useState, useEffect, ReactNode } from "react";
import useApi from "../api-service/useApiService";
import { Content, ContentResponse } from "../types/types";
import ApiContext from "./ApiContext";
import { CircularProgress } from "@mui/material";

interface ApiProviderProps {
  children: ReactNode;
}

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const [data, setData] = useState<Content | undefined>();

  const api = useApi<ContentResponse, undefined>("content");

  useEffect(() => {
    api.get();
  }, []);

  useEffect(() => {
    if (api.isSuccess) {
      setData(api.data?.content);
    }
  }, [api.isSuccess, api.isLoading]);

  return (
    <ApiContext.Provider
      value={{ data, loading: api.isLoading, error: api.isError }}
    >
      {data ? children : <CircularProgress />}
      {api.error}
    </ApiContext.Provider>
  );
};
