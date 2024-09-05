import Header from "./Header";
import { Outlet } from "react-router-dom";
const PageLayout = () => {
  return (
    <>
      <div className="container-fluid gx-0">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default PageLayout;
