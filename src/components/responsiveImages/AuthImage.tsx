"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import bgAuth from "../../../public/assets/images/png/bg-auth.png";
import bgAuthFull from "../../../public/assets/images/png/bg-auth-full.png";

const AuthImage: React.FC = () => {
  const [src, setSrc] = useState(bgAuth);

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 1500;
      setSrc(isLargeScreen ? bgAuthFull : bgAuth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <Image src={src} alt="background-image" />;
};

export default AuthImage;
