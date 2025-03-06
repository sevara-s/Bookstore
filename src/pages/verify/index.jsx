import React, { useState } from "react";
import signup from "../../assets/svgs/signup.svg";
import { useVerifyCode } from "../../useHooks/userVerifyCode";
import { Button, message, Input } from "antd";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const { mutate, isLoading } = useVerifyCode();
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;

    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);

      if (value.length === 6) {
        handleVerify(value);
      }
    }
  };

  const handleVerify = (code) => {
    if (code.length !== 6) {
      return message.error("Please enter a valid 6-digit code");
    }

    mutate(
      { code },
      {
        onSuccess: () => {
          message.success("Verification successful");
          navigate("/");
        },
        onError: (error) =>
          message.error(error.response?.data?.message || "Verification failed"),
      }
    );
  };

  return (
    <div className="w-screen h-screen flex items-center">
      <div className="w-[50%] bg-[#CCB294] h-screen flex items-center justify-center">
        <img src={signup} alt="Signup Illustration" />
      </div>

      <div className="w-[50%] flex justify-center">
        <div className="w-[70%]">
          <h1 className="text-5xl font-bold mb-4">Verify</h1>

          <Input
            value={otp}
            onChange={handleChange}
            maxLength={6}
            placeholder="Enter 6-digit code"
            className="text-center text-lg tracking-widest"
          />

          <Button
            type="primary"
            loading={isLoading}
            onClick={() => handleVerify(otp)}
            className="mt-4"
            disabled={otp.length !== 6}
          >
            Verify
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Verify;
