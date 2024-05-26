"use client";
import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <p className="total-balance-amount flex-center gap-2 bg-blue-50">
        <CountUp decimals={2} decimal="." prefix="$" end={amount} />
      </p>
    </div>
  );
};

export default AnimatedCounter;
