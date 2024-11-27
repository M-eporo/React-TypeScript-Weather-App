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
  }
  const { topIcon, iconSort, detailChartData } = contextValues;
  
    return (
      <div className="styles.chartContainer">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis />
            <YAxis />
            <Tooltip />
            <Area data={chartData} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }