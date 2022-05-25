import React from "react";

const Stat = () => {
  return (
    <div className="max-w-2xl mx-auto animate-pulse">
      <div className="stats stats-vertical lg:stats-horizontal shadow-2xl w-full">
        <div className="stat place-items-center">
          <div className="stat-title">Total Shipment</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">From January 2020 to February 1st 2022</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Users</div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Yearly Revenue</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
