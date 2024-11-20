import { ApiProvider } from "./api-context/ApiProvider";
import "./App.css";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <ApiProvider>
      <AppRoutes />
    </ApiProvider>
  );
};

export default App;
