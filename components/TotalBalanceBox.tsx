import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";
const TotalBalanceBox = ({
  account = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProp) => {
  return (
    <section className="total-balance h-max py-8">
      <div className="total-balance-chart">
        <DoughnutChart accounts={account} />
      </div>
      <div className="flex flex-col gap-6 py-2 h-28">
        <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-4">
          <p className="total-balance-label">Total Current Balance</p>

          <AnimatedCounter amount={totalCurrentBalance} />
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
