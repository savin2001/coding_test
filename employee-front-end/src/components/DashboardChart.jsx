import React from "react";

const DashboardChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "hsl(252, 82.9%, 67.8%)",
        borderColor: "hsl(252, 82.9%, 67.8%)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const configLineChart = {
    type: "line",
    data,
    options: {},
  };

  var chartLine = new Chart(
    document.getElementById("chartLine"),
    configLineChart
  );
  return (
    <article className="py-4">
      <h3 className="mb-2 text-left text-lg font-bold text-zinc-500">
        Overview
      </h3>
      <>
        <div className="shadow-lg rounded-lg overflow-hidden">
          <div className="py-3 px-5 bg-base-100">Line chart</div>
          <canvas className="p-10" id="chartLine" />
        </div>
      </>
    </article>
  );
};

export default DashboardChart;
