import React from "react";

const DashboardStats = () => {
  return (
    <article className="py-4  items-center justify-center">
      <div className="stats shadow w-full">
        <div className="stat">
          <div className="stat-title">Current float</div>
          <div className="stat-value text-neutral">250,600</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total deposits</div>
          <div className="stat-value text-neutral">2.6M</div>
          <div className="stat-desc">60% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total withdrawals</div>
          <div className="stat-value text-neutral">2.4M</div>
          <div className="stat-desc">45% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-value">86%</div>
          <div className="stat-title">Tasks done</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </article>
  );
};

export default DashboardStats;
