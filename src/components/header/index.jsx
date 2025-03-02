import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Dropdown, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import profile from "../../assets/imgs/profile.png";

// Dummy function: Replace with real authentication check later
const isAuthenticated = () => {
  return localStorage.getItem("user") !== null;
};

const Header = () => {
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();

  const profileMenu = (
    <Menu className="w-48 bg-white text-black rounded shadow-lg">
      <Menu.Item key="profile">
        <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item key="logout">
        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.reload();
          }}
          className="w-full text-left px-4 py-2 hover:bg-gray-200"
        >
          Logout
        </button>
      </Menu.Item>
    </Menu>
  );

  return (
    <section className="header bg-[#191919] py-[15px] border-b border-[#a6a5a5]">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="logo font-[400] text-[25px] text-[#c9ac8c]">
          Badiiyat
        </Link>

        <div className="header_links flex items-center gap-[20px]">
          <Link
            to="/"
            className="font-[300] text-[16px] text-[#fff] hover:text-[#c9ac8c]"
          >
            Bosh sahifa
          </Link>
          <Link className="font-[300] text-[16px] text-[#fff] hover:text-[#c9ac8c]">
            Nasr
          </Link>
          <Link className="font-[300] text-[16px] text-[#fff] hover:text-[#c9ac8c]">
            Nazm
          </Link>
          <Link className="font-[300] text-[16px] text-[#fff] hover:text-[#c9ac8c]">
            Maqolalar
          </Link>
          <Link className="font-[300] text-[16px] text-[#fff] hover:text-[#c9ac8c]">
            Forum
          </Link>
        </div>

        {loggedIn ? (
          <Dropdown overlay={profileMenu} placement="bottomRight" arrow>
            <Avatar
              src={profile}
              icon={<UserOutlined />}
              className="cursor-pointer w-10 h-10 rounded-full"
            />
          </Dropdown>
        ) : (
          <div className="flex gap-4">
            <Link
              to="/login"
              className="bg-[#c9ac8c] px-3 py-1 rounded hover:bg-[#ba8b59]"
            >
              Login
            </Link>
            <Link to="/signup" className="bg-[#c9ac8c] px-3 py-1 rounded hover:bg-[#ba8b59]">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
