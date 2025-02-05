import { useContext, useRef } from "react";
import { AppContext } from "../context";
import { AppContextType } from "../types/types";
import TempLineChart from "./TempLineChart";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontAwesome";
import styles from "../styles/resultsWeekly.module.css";


const ResultsWeekly = () => {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftBtnRef = useRef<HTMLDivElement>(null);
  const rightBtnRef = useRef<HTMLDivElement>(null);
  if(!contextValues){
    return <p>Loading...</p>;
  }

  const handleSlider = (direction: "left" | "right") => {
    const sliderWidth = containerRef.current?.clientWidth || 0;
    const scrollAmount = direction === "left" ? parseInt(`-${sliderWidth}`, 10) : sliderWidth;
    sliderRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };
  
  return (
    <>
      <div className={styles.container}>
        {/* <h4 className={styles.title}>週間天気予報</h4> */}
        <div className={styles.slider} ref={sliderRef}>
          {contextValues.weeklyData.map((item, index: number) => (
            <div
              key={item.date}
              className={styles.itemContainer}
              ref={containerRef}
            >
              <div className={styles.infoContainer}>
                {index === 0 ? (
                  <p>今日</p>
                ) : (
                  <p>
                    {new Intl.DateTimeFormat("ja-JP", {
                      weekday: "long",
                    }).format(new Date(item.date))}
                  </p>
                )}
                {/* <div className={styles.innerContainer}> */}
                  <img src={item.icon} alt="icon" />
                  {(item.daily_chance_of_rain > 0 && !item.daily_chance_of_snow) && (
                    <p className={styles.rain}>降水 : {item.daily_chance_of_rain}%</p>
                  )}
                  {item.daily_chance_of_snow > 0 && (
                    <p className={styles.snow}>降雪 : {item.daily_chance_of_snow}%</p>
                  )}
                {/* </div> */}
                {/* <div className={styles.textContainer}> */}
                  <p className={`${styles.tempText} ${styles.max}`}>
                    最高 : {item.maxtemp_c}℃
                  </p>
                  <p className={`${styles.tempText} ${styles.min}`}>
                    最低 : {item.mintemp_c}℃
                  </p>
                {/* </div> */}
              </div>
              <TempLineChart
                lineChartData={contextValues.lineChartData[index]}
                mintemp={item.mintemp_c}
                maxtemp={item.maxtemp_c}
              />
            </div>
          ))}
        </div>
        <div
          // style={{ pointerEvents: isStart ? "none" : "auto" }}
          className={`${styles.button} ${styles.left}`}
          ref={leftBtnRef}
          onClick={() => handleSlider("left")}
        >
          <FontAwesomeIcon
            icon={"fa-solid fa-chevron-left" as IconProp}
            style={{ color: "#f9a735" }}
          />
        </div>
        <div
          // style={{ pointerEvents: isEnd ? "none" : "auto" }}
          className={`${styles.button} ${styles.right}`}
          ref={rightBtnRef}
          onClick={() => handleSlider("right")}
        >
          <FontAwesomeIcon
            icon={"fa-solid fa-chevron-right" as IconProp}
            style={{ color: "#f9a735" }}
          />
        </div>
      </div>
    </>
  );
};

export default ResultsWeekly;
