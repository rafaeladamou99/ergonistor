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
import Services from "./components/Services/Services";
import useApiContext from "./api-context/useApiContext";
const AppRoutes = () => {
  const { data, loading, error } = useApiContext();
  const router = createBrowserRouter([
    {
      path: Routes.Home.path,
      element: <Router content={data} />,
      errorElement: <Error />,
      children: [
        { path: Routes.Home.path, element: <Home content={data} /> },
        { path: Routes.Services.path, element: <Services content={data} /> },
        { path: Routes.Services.Service.routerPath, element: <Service /> },
        { path: Routes.Projects.path, element: <Projects content={data} /> },
        { path: Routes.Projects.Project.routerPath, element: <Project /> },
        { path: Routes.About.path, element: <About content={data} /> },
        { path: Routes.FAQs.path, element: <FAQs content={data} /> },
        { path: Routes.Contact.path, element: <Contact content={data} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
