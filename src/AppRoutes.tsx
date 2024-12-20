import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import FAQs from "./components/FAQs/FAQs";
import Home from "./components/Home/Home";
import Project from "./components/Projects/Project/Project";
import Projects from "./components/Projects/Projects";
import Router from "./components/Router/Router";
import { Routes } from "./components/Router/Routes";
import Service from "./components/Services/Service/Service";
import Services from "./components/Services/ServicesCategories";
import useApiContext from "./api-context/useApiContext";
import ServicesCategory from "./components/Services/ServicesCategory";
import { Slider } from "./types/types";
import useApi from "./api-service/useApiService";
import { useEffect } from "react";
const AppRoutes = () => {
  const { data, loading, error } = useApiContext();

  const { data: sliderData, get: getSlider } = useApi<[Slider], undefined>(
    "slider",
  );
  const router = createBrowserRouter([
    {
      path: Routes.Home.path,
      element: <Router content={data} logo={sliderData?.[0]?.logo}/>,
      errorElement: <Error />,
      children: [
        {
          path: Routes.Home.path,
          element: <Home content={data} sliderData={sliderData} />,
        },
        {
          path: Routes.ServicesCategories.path,
          element: <Services content={data} />,
        },
        {
          path: Routes.ServicesCategories.ServiceCategory.routerPath,
          element: <ServicesCategory content={data} />,
        },
        {
          path: Routes.ServicesCategories.ServiceCategory.Service.routerPath,
          element: <Service />,
        },
        { path: Routes.Projects.path, element: <Projects content={data} /> },
        { path: Routes.Projects.Project.routerPath, element: <Project /> },
        { path: Routes.About.path, element: <About content={data} /> },
        { path: Routes.FAQs.path, element: <FAQs content={data} /> },
        { path: Routes.Contact.path, element: <Contact content={data} /> },
      ],
    },
  ]);

  useEffect(() => {
    getSlider();
  }, []);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
