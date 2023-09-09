"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTimerCycleStore } from "@/lib/stores/TimerCycle";
import Chart from "chart.js/auto";

const PomodoroChart = () => {
  const canvasRef = useRef(null);
  const [chart, setChart] = useState(null);
  const { completedCycles, setCompletedCycles }: any = useTimerCycleStore(); //zustand

  const currentDate = new Date();
  const options = {
    month: "short",
    day: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);

  useEffect(() => {
    if (canvasRef.current && !chart) {
      const ctx = canvasRef.current.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      if (ctx) {
        const pomodoroChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: [formattedDate],
            datasets: [
              {
                label: "Pomodoro Completed",
                data: [completedCycles], // Use an array here with a single data point
                backgroundColor: gradient, // Assign the gradient directly
                borderColor: "#2D75DD",
                borderWidth: 2,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: false,
                  text: "Pomodoro Completed",
                },
                stacked: true,
                grace: "10%",
                ticks: {
                  precision: 0,
                },
              },
              x: {
                title: {
                  display: false,
                  text: "Date",
                },
                stacked: true,
              },
            },
          },
        });
        gradient.addColorStop(0, "rgba(45,117,221,0.5)");
        gradient.addColorStop(1, "rgba(255,255,255,1)");
        setChart(pomodoroChart);
      }
    }
  }, [completedCycles]);

  useEffect(() => {
    if (chart) {
      chart.data.labels.push(formattedDate); // Push the formatted date
      chart.data.datasets[0].data.push(completedCycles);
      chart.update();
    }
  }, [completedCycles, formattedDate]);

  return (
    <div className="w-full max-h-[350px]">
      <div className="flex justify-between pl-1">
        <h1 className="font-semibold">Focus hours Summary</h1>
      </div>
      <canvas ref={canvasRef} className="w-full max-h-[300px] pt-2"></canvas>
    </div>
  );
};

export default PomodoroChart;
