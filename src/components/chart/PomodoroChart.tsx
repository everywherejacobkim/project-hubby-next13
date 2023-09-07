"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTimerCycleStore } from "@/lib/stores/TimerCycle";
import Chart from "chart.js/auto";

const PomodoroChart = () => {
  const canvasRef = useRef(null);
  const [chart, setChart] = useState(null);
  const { completedCycles, setCompletedCycles }: any = useTimerCycleStore(); //zustand

  useEffect(() => {
    if (canvasRef.current && !chart) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        const pomodoroChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: Array.from({ length: completedCycles }, (_, i) => i + 1),
            datasets: [
              {
                label: "Pomodoro Completed",
                data: Array.from({ length: completedCycles }, (_, i) => i),
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2,
                fill: true,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Pomodoro Completed",
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Pomodoro Number",
                },
              },
            },
          },
        });

        setChart(pomodoroChart);
      }
    }
  }, [completedCycles, chart]);

  useEffect(() => {
    if (chart) {
      chart.data?.labels.push(completedCycles);
      chart.data?.datasets[0].data.push(completedCycles);
      chart.update();
    }
  }, [chart, completedCycles]);

  return (
    <div>
      <canvas ref={canvasRef} className="w-full h-auto"></canvas>
    </div>
  );
};

export default PomodoroChart;
