import { useContext } from "react";
import { AppContext } from "../context";
import { AppContextType } from "../types/types";
import DetailChart from "./DetailChart";


export default function ResultsDetail() {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  if (!contextValues) {
    return <p>データがありません。</p>
  }
  const { iconSort, detailChartData } = contextValues;
  const chartData: { time: string; data: number }[] = [];

  switch (iconSort) {
    case "rain":
      detailChartData.forEach((item) => {
        chartData.push({
          time: item.time.split(" ")[1].slice(0, 2),
          data: item.precip_mm,
          category: iconSort,
        });
      });
      break;
    case "humidity":
      detailChartData.forEach((item) => {
        chartData.push({
          time: item.time.split(" ")[1].slice(0, 2),
          data: item.humidity,
          category: iconSort
        });
      });
      break;
    case "snow":
      detailChartData.forEach((item) => {
        chartData.push({
          time: item.time.split(" ")[1].slice(0, 2),
          data: item.snow_cm,
          category: iconSort,
        });
      });
      break;
    case "atmosphere":
      detailChartData.forEach((item) => {
        chartData.push({
          time: item.time.split(" ")[1].slice(0, 2),
          data: item.pressure_mb,
          category: iconSort,
        });
      });
      break;
    case "wind":
      detailChartData.forEach((item) => {
        chartData.push({
          time: item.time.split(" ")[1].slice(0, 2),
          data: item.gust_kph,
          category: iconSort,
        });
      });
      break;
    case "uv":
      detailChartData.forEach((item) => {
        chartData.push({
          time: item.time.split(" ")[1].slice(0, 2),
          data: item.uv,
          category: iconSort,
        });
      });
      break;
    default:
      detailChartData.forEach((item) => {
        chartData.push({
          time: item.time.split(" ")[1].slice(0, 2),
          data: item.temp_c,
          category: iconSort,
        });
      });
  }

  console.log(chartData);
  return <DetailChart chartData={ chartData } />;
}

