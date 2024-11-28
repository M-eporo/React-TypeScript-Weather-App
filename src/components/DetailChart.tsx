import { useContext } from "react";
import { AppContext } from "../context";
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
import type { AppContextType } from "../types/types";

type Props = {
  chartData: {
    time: string;
    data: number;
    category: string;
  }[];
}
export default function DetailChart({ chartData }: Props) {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  if (!contextValues) {
    return <p>データが存在しません。</p>
  } else if (!contextValues.isData) {
    return <p>データが未取得です。</p>
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
            <Area type="monotone" dataKey="data" stroke="#82ca9d" fillOpacity={0.5} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
         
    );
    }
  }