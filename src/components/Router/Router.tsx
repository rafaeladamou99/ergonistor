import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import BottomBar from "../BottomBar/BottomBar";
import { ContentProp } from "../../types/types";

const Root = ({ content, logo }: ContentProp & { logo?: string }) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <NavigationBar logo={logo} />
      <main className="w-full flex flex-1 justify-center">
        <Outlet />
      </main>
      <BottomBar content={content} />
    </div>
  );
};

export default Root;
