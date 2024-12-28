import React from "react";
import logo from "@assets/images/Logo.svg";
import Image from "next/image";

const DappNavbar = () => {
  return (
    <div>
      <div className="container pt-5">
        <Image src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default DappNavbar;
