import { ChildrenType } from "@/utils/types";
import React from "react";
import Navbar from "../Navbar";

type ContainerProps = ChildrenType;

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="h-[100vh]">
      <Navbar />
      <div className="p-28">{children}</div>
    </div>
  );
};

export default Container;
