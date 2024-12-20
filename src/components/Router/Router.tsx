import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import BottomBar from "../BottomBar/BottomBar";
import { ContentProp } from "../../types/types";

const Root = ({ content, logo }: ContentProp & { logo?: string }) => {
  return (
    <>
      <NavigationBar logo={logo} />
      <main className="w-full flex justify-center">
        <Outlet />
      </main>
      <BottomBar content={content} />
    </>
  );
};

export default Root;
