import { Outlet } from "react-router-dom";
import Header from "../../components/header";

const MainLayout = () => {
  return (
    <>
      <div className="all_section flex flex-col min-h-screen">
        <Header />
      </div>
    </>
  );
};

export default MainLayout;
