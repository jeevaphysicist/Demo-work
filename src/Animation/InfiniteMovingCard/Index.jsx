// InfiniteMovingCardsDemo.jsx
import React from "react";
import {InfiniteMovingCards}  from "./Moving";

export function InfiniteMovingCardsDemo({data}) {
  

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={data}
        direction="left"
        speed="fast"
      />
    </div>
  );
}
