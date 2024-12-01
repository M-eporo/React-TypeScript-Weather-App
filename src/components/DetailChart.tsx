import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import styles from "../styles/detailChart.module.css";
import type { AreaChartDataType } from "../types/types";

export default function DetailChart({ chartData }: AreaChartDataType) {
  //console.log(chartData);
  if (chartData[0].category === "wind") {
    return (
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 15, bottom: 5, left: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="data"
              stroke="#82ca9d"
              fillOpacity={0.5}
            />
            <Area
              type="monotone"
              dataKey="subData"
              stroke="#82ca9d"
              fillOpacity={0.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return (
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 15, bottom: 5, left: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="data"
              stroke="#82ca9d"
              fillOpacity={0.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}