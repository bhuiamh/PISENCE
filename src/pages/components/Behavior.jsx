import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import useStudentData from "../../providers/useStudentData";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Behavior() {
  const fetchData = useStudentData();
  const behavior = fetchData ? fetchData["Behavioral Analytics"] : {};

  const good = behavior.length && behavior.filter((b) => b === "good").length;
  const bad = behavior.length && behavior.filter((b) => b === "bad").length;
  const data = {
    labels: ["Good", "Bad"],
    datasets: [
      {
        label: "Among 5 days: ",
        data: [good, bad],
        backgroundColor: ["#1ed033", "#ff0000"],
        borderColor: ["#219653", "#cc0000"],
        borderWidth: 0,
      },
    ],
  };
  return (
    <div className="max-h-96 flex justify-center">
      <div>
        <h1 className="text-2xl my-4 font-bold text-orange-500 text-center">
          Hi Pisence, Your 5 days behavior report
        </h1>
        {behavior.length ? <Pie className="text-center" data={data} /> : null}
      </div>
    </div>
  );
}
