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

export default function DetailChart() {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  if (!contextValues) {
    return <p>データが存在しません。</p>
  }
  const { topIcon, iconSort, detailChartData } = contextValues;
  console.log(topIcon);
  console.log(iconSort);
  console.log(detailChartData);
  return (
    <p>asldjk</p>
  );
}