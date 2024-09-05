import Header from "./Header";
import { Outlet } from "react-router-dom";
const PageLayout = () => {
  return (
    <>
      <div className="vh-100 container-fluid gx-0 d-flex flex-column ">
        <Header />
        <div className="flex-grow-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PageLayout;
