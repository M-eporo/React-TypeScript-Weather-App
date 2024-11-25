import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from "recharts";
import styles from "../styles/tempLineChart.module.css";

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
        <LineChart
          data={data}
          margin={{ top: 5, right: 15, bottom: 5, left: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            scale="point"
            interval={2}
            dataKey="time"
            tick={{ fontSize: "13px", fill: "#333" }}
          />
          <YAxis
            domain={[mintemp - 2, maxtemp + 2]}
            tick={{ fontSize: "13px", fill: "#333" }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "transparent", border: "none" }}
            labelStyle={{ fontSize: "13px", fill: "#333" }}
            itemStyle={{ fontSize: "13px", fill: "#333" }}
          />
          <Line
            type="linear"
            dataKey="temp"
            stroke="#000"
            activeDot={{ r: 3 }}
          >
            <LabelList
              dataKey="temp" position="bottom"
              style={{ fontSize: "10px", fill: "#333" }}
            />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  ); 
}
export default TempLineChart;