"use client";
import React, { useState } from "react";
import { InputOtp } from "primereact/inputotp";
import Image from "next/image";
import InputFloating from "../InputFloating";
import Link from "next/link";
export default function Login() {
  const [pin, setPin] = useState("");
  console.log(pin)
  const [mobile, setMobile] = useState("");
  const handleMobileChange = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 10);
    setMobile(cleaned);
    console.log(mobile);
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url("/backgrounds/paper-texture.jpg")` }}
    >
      <div className="w-full max-w-sm p-6 relative">
        <span className="absolute top-0 right-16 w-14 h-14 bg-blue-500 shadow-lg rounded-full "></span>
        <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col items-center justify-center gap-4">
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
            onChange={(value) => handleMobileChange(value)}
          />
          <InputOtp
            value={pin}
            onChange={(e) => setPin(e.value)}
            integerOnly
            mask
          />
          <Link
            href={"/dashboard"}
            className="bg-primary rounded-md  w-full text-center text-white p-2"
          >
            Login
          </Link>
          <p className="text-xs text-center">
            If you have trouble logging into your tenancy please contact
            Adminstrator
          </p>
        </div>
      </div>
    </div>
  );
}
