export const Routes = {
  Home: {
    name: "Home",
    path: "/",
  },
  Services: {
    name: "Services",
    path: "/services",
    Service: {
      name: "Service",
      path: (serviceId: number) => `/services/${serviceId}`,
      routerPath: "services/:serviceId",
    },
  },
  Projects: {
    name: "Projects",
    path: "/projects",
    Project: {
      name: "Project",
      path: (projectId: number) => `/projects/${projectId}`,
      routerPath: "projects/:projectId",
    },
  },
  About: {
    name: "About",
    path: "/about",
  },
  FAQs: {
    name: "FAQs",
    path: "/faqs",
  },
  Contact: {
    name: "Contact",
    path: "/contact",
  },
};
