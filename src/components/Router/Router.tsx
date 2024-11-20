import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import BottomBar from "../BottomBar/BottomBar";

const Root = () => {
  return (
    <>
      <NavigationBar />
      <main className="w-full flex justify-center">
        <Outlet />
      </main>
      <BottomBar />
    </>
  );
};

export default Root;
