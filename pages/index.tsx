import React, { useState, useEffect } from "react";
import ComputersCanvas from "@/components/Home/ComputersCanvas";
import Introduction from "@/components/Home/Introduction";

export default function Home() {
  return (
    <div className="flex-col">
      <Introduction />
    </div>
  );
}
