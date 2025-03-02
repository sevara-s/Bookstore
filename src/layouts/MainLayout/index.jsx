import { Outlet, useNavigate } from "react-router-dom";
import { useIsFetching } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import Header from "../../components/header";

const MainLayout = () => {
  const navigation = useNavigate();
  const isFetching = useIsFetching();
  const isLoading = navigation.state === "loading" || isFetching > 0;

  return (
    <>
      <div className="all_section flex flex-col min-h-screen">
        <Header />
        <Loader isLoading={isLoading}/>
        <Outlet/>

        
      </div>
    </>
  );
};

export default MainLayout;
