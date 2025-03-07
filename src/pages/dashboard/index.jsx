import React, { useState, useEffect } from "react";
import { Input, Button, Modal, Upload } from "antd";
import { EditOutlined, UploadOutlined } from "@ant-design/icons";
import { useProfileMutations } from "../../useHooks/useProfileMutation";
import { useAxios } from "../../useHooks";
import profilePlaceholder from "../../assets/imgs/main-profile.png";
import edit from "../../assets/svgs/edit.svg";

const Dashboard = () => {
  const { editMutation } = useProfileMutations();
  const request = useAxios();

  const [user, setUser] = useState({ name: "", surname: "", email: "", avatar: "" });
  const [formData, setFormData] = useState({ name: "", surname: "", email: "", avatar: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState(profilePlaceholder);

  useEffect(() => {
    request({
      url: "/api/auth/user",
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((data) => {
        setUser(data);
        setFormData(data); // Ensure formData is updated
        if (data.avatar) {
          setImagePreview(data.avatar);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch profile data:", error);
      });
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setFormData(user); // Reset form data to original values
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = () => {
    editMutation.mutate(formData, {
      onSuccess: () => {
        setUser(formData);
        setIsModalOpen(false);
      },
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <section className="dashboard h-screen p-5 pt-[50px]">
        <div className="dashboard_container container flex gap-[50px] items-start">
          {/* Profile Image Section */}
          <div className="img_container relative self-start">
            <img
              src={imagePreview}
              alt="Profile"
              className="w-50 h-50 rounded-full object-cover"
            />
            <label
              className="edit absolute bottom-1 right-2 flex items-center justify-center rounded-lg h-12 w-12 bg-[#f3f6f9] shadow-md cursor-pointer"
            >
              <img src={edit} alt="Edit" className="w-6 h-6" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* User Information Section */}
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  size="large"
                  className="w-full !outline-none"
                  suffix={<EditOutlined className="text-gray-500 cursor-pointer" onClick={showModal} />}
                />
              </div>

              <div className="flex flex-col gap-[5px]">
                <label className="text-gray-700 text-sm font-medium mb-1">
                  Surname
                </label>
                <Input
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  size="large"
                  className="w-full !outline-none"
                  suffix={<EditOutlined className="text-gray-500 cursor-pointer" onClick={showModal} />}
                />
              </div>

              <div className="flex flex-col gap-[5px]">
                <label className="text-gray-700 text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  size="large"
                  className="w-full !outline-none"
                  suffix={<EditOutlined className="text-gray-500 cursor-pointer" onClick={showModal} />}
                />
              </div>
            </form>

            <div className="pt-[50px] flex justify-end w-full mt-auto">
              <Button
                size="large"
                className="!font-[600] !text-[13px] !text-[#fff] !bg-[#152540]"
                onClick={showModal}
              >
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Editing Profile */}
      <Modal
        title="Edit Profile"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSaveChanges}>
            Save
          </Button>,
        ]}
      >
        <div className="flex flex-col gap-4">
          {/* Profile Image Upload */}
          <div className="flex flex-col items-center">
            <img
              src={imagePreview}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full mb-3"
            />
            <Upload
              showUploadList={false}
              beforeUpload={(file) => {
                handleImageChange({ target: { files: [file] } });
                return false;
              }}
            >
              <Button icon={<UploadOutlined />}>Change Avatar</Button>
            </Upload>
          </div>

          <label className="text-gray-700 text-sm font-medium">Name</label>
          <Input name="name" value={formData.name} onChange={handleChange} />

          <label className="text-gray-700 text-sm font-medium">Surname</label>
          <Input name="surname" value={formData.surname} onChange={handleChange} />

          <label className="text-gray-700 text-sm font-medium">Email</label>
          <Input name="email" value={formData.email} onChange={handleChange} />
        </div>
      </Modal>
    </>
  );
};

export default Dashboard;
