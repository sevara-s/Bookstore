import React from "react";
import Showcase from "./Showcase";
import CategoryList from "./categories";
import WriterList from "./Writers/WriterList";

const Home = () => {
  return (
    <>
       <Showcase/>
       <CategoryList/>
       <WriterList/>
       
    </>
  );
};

export default Home;
