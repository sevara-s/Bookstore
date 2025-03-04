import { section } from "framer-motion/client";
import React from "react";

// svg import
import login from "../../assets/svgs/login.svg";

const LoginPage = () => {
  return (
    <section className="login">
      <div className="login_img">
        <img src={login} alt="" />
      </div>
    </section>
  );
};
