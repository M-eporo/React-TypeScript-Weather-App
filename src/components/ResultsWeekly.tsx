import { useContext } from "react";
import { AppContext } from "../context";
import { AppContextType } from "../types/types";
import TempLineChart from "./TempLineChart";
import styles from "../styles/resultsWeekly.module.css";

const ResultsWeekly = () => {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  if(!contextValues){
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>週間天気予報</h4>
      <div className={styles.outerContainer}>
        {contextValues.weeklyData.map((item, index: number) => (
          <div key={item.date} className={styles.flexContainer}>
            <div className={styles.contentsContainer}>
              {index === 0 ? (
                <p>今日</p>
              ) : (
                <p>
                  {new Intl.DateTimeFormat("ja-JP", { weekday: "long" }).format(
                    new Date(item.date)
                  )}
                </p>
              )}
              <div className={styles.innerContainer}>
                <img src={item.icon} alt="icon" />
                {item.daily_chance_of_rain > 0 && (
                  <p className={styles.rain}>{item.daily_chance_of_rain}%</p>
                )}
              </div>
              <div className={styles.innerContainer}>
                <p className={styles.tempText}>最高 : {item.mintemp_c}℃</p>
                <p className={styles.tempText}>最低 : {item.maxtemp_c}℃</p>
              </div>
            </div>
            <TempLineChart
              lineChartData={contextValues.lineChartData[index]}
              mintemp={item.mintemp_c}
              maxtemp={item.maxtemp_c}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsWeekly;
