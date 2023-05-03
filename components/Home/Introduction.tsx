import React from "react";
import ComputersCanvas from "./ComputersCanvas";

const Introduction = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div className="absolute flex">
        <div className="flex-3">
          <div className="grid grid-flow-row gap-y-8">
            <Title>Full Stack Developer</Title>
            <p className="text-xl text-zinc-100">
              {"Hi, I'm Thomas, A Front-End and Back-End lover."}
            </p>
          </div>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

const Title = ({ children }: { children: string }) => {
  return (
    <p
      className="animate-text bg-gradient-to-r from-orange-500 via-yellow-500 to-red-400
    bg-clip-text text-5xl font-bold text-transparent 
    drop-shadow-[6px_6px_4px_rgba(253,186,116,0.5)]"
    >
      {children}
    </p>
  );
};

export default Introduction;
