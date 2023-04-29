import React from "react";
import { FC } from "react";

const Introduction = () => {
  return (
    <div className="flex">
      <div className="flex-3">
        <div className="grid grid-flow-row gap-y-8">
          <Title />
          <p className="text-xl text-zinc-100">
            Hi, I'm Thomas, A Front-End and Back-End lover.
          </p>
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

const Title = () => {
  return (
    <p
      className="animate-text bg-gradient-to-r from-orange-500 via-orange-300 to-orange-500 
    bg-clip-text text-5xl font-bold text-transparent 
    drop-shadow-[6px_6px_4px_rgba(253,186,116,0.5)]"
    >
      Full Stack Developer
    </p>
  );
};

export default Introduction;
