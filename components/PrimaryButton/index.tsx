import React, { ComponentProps } from "react";

type PrimaryButtonProps = ComponentProps<any>;

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <button className="px-4 py-1 transition-all hover:text-gray-500">
      <span className="font-bold">{children}</span>
    </button>
  );
};

export default PrimaryButton;
