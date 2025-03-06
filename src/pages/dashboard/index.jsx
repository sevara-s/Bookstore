import React from "react";
import { Input, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

import profile from "../../assets/imgs/main-profile.png";
import edit from "../../assets/svgs/edit.svg";

const Dashboard = () => {
  return (
    <>
      <section className="dashboard h-screen p-5 pt-[50px]">
        <div className="dashboard_container container flex gap-[50px] items-start">
          <div className="img_container relative self-start">
            <img
              src={profile}
              alt="Profile"
              className="w-50 h-50 rounded-full object-cover"
            />
            <div className="edit absolute bottom-1 right-2 flex items-center justify-center rounded-lg h-12 w-12 bg-[#f3f6f9] shadow-md cursor-pointer">
              <img src={edit} alt="Edit" className="w-6 h-6" />
            </div>
          </div>

          <div className="flex flex-col justify-between flex-grow h-full w-full">
            <form className="flex flex-col gap-4 w-full">
              <h1 className="font-medium text-[18px] text-[#212121] mb-2">
                My Profile
              </h1>

              <div className="flex flex-col gap-[5px]">
                <label className="text-gray-700 text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  placeholder="Enter your name"
                  size="large"
                  className="w-full !outline-none"
                  suffix={<EditOutlined className="text-gray-500 cursor-pointer" />}
                />
              </div>

              {/* Surname */}
              <div className="flex flex-col gap-[5px]">
                <label className="text-gray-700 text-sm font-medium mb-1">
                  Surname
                </label>
                <Input
                  placeholder="Enter your surname"
                  size="large"
                  className="w-full !outline-none"
                  suffix={<EditOutlined className="text-gray-500 cursor-pointer" />}
                />
              </div>

              <div className="flex flex-col gap-[5px]">
                <label className="text-gray-700 text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  placeholder="Enter your email"
                  size="large"
                  className="w-full !outline-none"
                  suffix={<EditOutlined className="text-gray-500 cursor-pointer" />}
                />
              </div>
            </form>

            <div className="pt-[50px] flex justify-end w-full mt-auto">
              <Button size="large" className="!font-[600] !text-[13px] !text-[#fff] !bg-[#152540]">
                Save changes
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
