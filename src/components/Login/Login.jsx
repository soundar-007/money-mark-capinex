"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import InputFloating from "../InputFloating";
import Otp from "../CustomOtp/Otp";
import { useLogin } from "@/hooks/useApi";
import { toast } from "react-hot-toast";
import Spinner from "../Spinner";

export default function Login() {
  const [pin, setPin] = useState(new Array(6).fill(""));
  const [mobile, setMobile] = useState("");
  const handleMobileChange = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 10);
    setMobile(cleaned);
  };

  const { mutate: login, isPending: loginLoading } = useLogin();

  const handleSubmit = () => {
    if (loginLoading) return;

    const otp = Array.isArray(pin) ? pin.join("") : String(pin); // safety check

    if (!/^\d{10}$/.test(mobile) || otp.length !== 6) {
      toast.error("Fill the Mandatory Fields");
      return;
    }

    const param = { mobile_number: mobile, access_code :otp };
    login(param);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url("/backgrounds/paper-texture.jpg")` }}
    >
      <div className="w-full max-w-md p-6 relative">
        <span className="absolute top-0 right-16 w-14 h-14 bg-blue-500 shadow-lg rounded-full "></span>
        <div className="bg-white rounded-xl shadow-2xl flex flex-col items-center justify-center gap-4 w-auto p-10">
          <Image
            src={"/capinexLogo.png"}
            height={150}
            width={150}
            alt="Capinex Logo"
          />
          <h6 className="text-blue-900 text-lg font-semibold mt-2 mb-2">
            Sign In
          </h6>
          <InputFloating
            label={"Mobile"}
            className=" w-full mb-2"
            value={mobile}
            // ref={mobileRef}
            onChange={(value) => handleMobileChange(value)}
          />
          <Otp length={6} mask handleOnChange={setPin} />
          <button
            onClick={handleSubmit}
            disabled={loginLoading}
            className="w-full flex items-center justify-center p-2 text-center text-white rounded-md bg-primary disabled:bg-blue-500 disabled:cursor-not-allowed"
          >
            {loginLoading ? (
              <div className="flex items-center justify-center gap-2">
                <span>Logging in </span>
                <Spinner />
              </div>
            ) : (
              "Login"
            )}
          </button>

          <p className="text-xs text-center">
            If you have trouble logging into your tenancy please contact
            Adminstrator
          </p>
        </div>
      </div>
    </div>
  );
}
