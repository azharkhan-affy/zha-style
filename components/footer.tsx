"use client";
import { appName } from "@/constants/constants";
import React from "react";

const Footer = () => {
  const dateNew = new Date().getFullYear();
  return (
    <div className="wrapper flex items-center justify-center text-sm">
      {appName} @{dateNew} All Rights Resreved
    </div>
  );
};

export default Footer;
