import { ChildrenType } from "@/utils/types";
import React from "react";
import Navbar from "../Navbar";

type ContainerProps = ChildrenType;

const Container = ({ children }: ContainerProps) => {
  return (
    <div>
      <Navbar />
      <div className="container p-28">{children}</div>
    </div>
  );
};

export default Container;
