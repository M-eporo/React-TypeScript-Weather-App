import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";
import styles from "../styles/tempLineChart.module.css";
import type { CustomToolTipType } from "../types/types";
type Props = {
  lineChartData: {
    time: string;
    temp: number;
  }[];
  mintemp: number;
  maxtemp: number;
}

const TempLineChart = ({ lineChartData, mintemp, maxtemp }: Props) => {
  const data = lineChartData;
  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 5, right: 15, bottom: 5, left: 10 }}
        >
          {/* <defs>
            <linearGradient id="colorWeek" x1="0" y1="0" x2="0" y2="1">
              <stop offset="90%" stopColor="#FF0005" stopOpacity={0.8} />
              <stop offset="75%" stopColor="#FF8705" stopOpacity={0.8} />
              <stop offset="50%" stopColor="#EEFF02" stopOpacity={0.8} />
              <stop offset="30%" stopColor="#31FF00" stopOpacity={0.8} />
              <stop offset="10%" stopColor="#00D2FF" stopOpacity={0.8} />
            </linearGradient>
          </defs> */}
          <defs>
            <linearGradient id="colorWeek" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#FF0005" stopOpacity={0.5} />
              <stop offset="25%" stopColor="#FF8705" stopOpacity={0.5} />
              <stop offset="50%" stopColor="#EEFF02" stopOpacity={0.5} />
              <stop offset="70%" stopColor="#31FF00" stopOpacity={0.5} />
              <stop offset="80%" stopColor="#00D2FF" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            scale="point"
            interval={2}
            dataKey="time"
            tick={{ fontSize: "12px", fill: "#000" }}
            stroke="#ccc"
          />
          <YAxis
            domain={[mintemp - 2, maxtemp + 2]}
            tick={{ fontSize: "12px", fill: "#000" }}
            allowDecimals={false}
            stroke="#ccc"
          />
          <Tooltip
            contentStyle={{ backgroundColor: "transparent", border: "none" }}
            labelStyle={{ fontSize: "12px", fill: "#000", color: "#000" }}
            itemStyle={{ fontSize: "12px", fill: "#000", color: "#000" }}
            formatter={(value, name) => {
              const customNames: CustomToolTipType = {
                temp: "気温",
              };
              return [value, customNames[name] || name];
            }}
          />
          <Area
            type="natural"
            dataKey="temp"
            stroke="#ccc"
            activeDot={{ r: 3 }}
            dot={{ fill: "transparent", stroke: "#ccc" }}
            fill="url(#colorWeek)"
          >
            <LabelList
              dataKey="temp"
              position="bottom"
              style={{ fontSize: "10px", fill: "#555" }}
            />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  ); 
}
export default TempLineChart;