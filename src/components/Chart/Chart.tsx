import React from "react";
import "./Chart.css";
import { ChartBar } from "./ChartBar";

export const Chart = (props: any) => {
  const dataPointtValues = props.dataPoints.map(
    (dataPoint: any) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointtValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoints: any) => (
        <ChartBar
          value={dataPoints.value}
          maxValue={totalMaximum}
          label={dataPoints.label}
          key={dataPoints.label}
        ></ChartBar>
      ))}
    </div>
  );
};
