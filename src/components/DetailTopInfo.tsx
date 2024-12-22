import { useContext } from "react";
import { AppContext } from "../context";
import type { AppContextType, CurrentType } from "../types/types";
import { KPH_TO_MPS } from "../constants";
import styles from "../styles/detailTopInfo.module.css";

export default function DetailTopInfo() {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  if (!contextValues) {
    return <p>データが存在しません。</p>;
  }
  //detailTopData = dayデータ
  const { iconSort, specificDateData, detailTopData } = contextValues;
  //現在時刻のデータ-current Stateで変更されない現在の日時のデータ
  let current: Partial<CurrentType> = {};
  if (contextValues.allData) {
    current = { ...contextValues.allData.current };
  }
  //Calenderコンポーネントの日付に合わせたデータ
  const filteredData = detailTopData.filter(
    (_, index) => index === specificDateData
  );
  //24時間データ-１日だけ
  const { detailChartData } = contextValues;
  //総雨量
  const totalprecip_mm = filteredData[0].totalprecip_mm;
  //総降雪量
  const totalsnow_cm = filteredData[0].totalsnow_cm;
  //平均気圧
  let avgAtmos = 0;
  for (let i = 0; i < detailChartData.length; i++) {
    avgAtmos += detailChartData[i].pressure_mb;
  }
  avgAtmos = Math.floor(avgAtmos / 24);
  //最低気圧
  const minAtmos = detailChartData.reduce(
    (accumulator, currentValue) =>
      Math.min(accumulator, currentValue.pressure_mb),
    Infinity
  );
  //最高気圧
  const maxAtmos = detailChartData.reduce(
    (accumulator, currentValue) =>
      Math.max(accumulator, currentValue.pressure_mb),
    -Infinity
  );
  //最大風速
  const maxWind_kph = detailChartData.reduce(
    (accumulator, currentValue) => Math.max(accumulator, currentValue.wind_kph),
    -Infinity
  );
  //最低風速
  const minWind_kph = detailChartData.reduce(
    (accumulator, currentValue) => Math.min(accumulator, currentValue.wind_kph),
    Infinity
  );
  //方位
  let wind_dir: string | undefined = current.wind_dir;
  switch (wind_dir) {
    case "N":
      wind_dir = "北";
      break;
    case "E":
      wind_dir = "東";
      break;
    case "S":
      wind_dir = "南";
      break;
    case "W":
      wind_dir = "西";
      break;
    case "NNE":
      wind_dir = "北北東";
      break;
    case "NE":
      wind_dir = "北東";
      break;
    case "ENE":
      wind_dir = "東北東";
      break;
    case "ESE":
      wind_dir = "東南東";
      break;
    case "SE":
      wind_dir = "南東";
      break;
    case "SSE":
      wind_dir = "南南東";
      break;
    case "SSW":
      wind_dir = "南南西";
      break;
    case "SW":
      wind_dir = "南西";
      break;
    case "WSW":
      wind_dir = "西南西";
      break;
    case "WNW":
      wind_dir = "西北西";
      break;
    case "NW":
      wind_dir = "北西";
      break;
    case "NNW":
      wind_dir = "北北西";
      break;
    default:
      wind_dir = "方角の情報が取得できませんでした。";
      break;
  }
  //maxUv
  const maxUv = detailChartData.reduce(
    (accumulator, currentValue) => Math.max(accumulator, currentValue.uv),
    -Infinity
  );
  switch (iconSort) {
    case "temperature":
      return (
        <div className={styles.container}>
          {specificDateData === 0 ? (
            <>
              <p className={styles.textArea}>
                <span>現在</span>
                <span className={styles.emphasis}>{current.temp_c}</span>℃
                <span className={styles.itemName}>体感</span>
                <span className={styles.emphasis}>{current.feelslike_c}</span>℃
              </p>
              <p className={`${styles.smallText} ${styles.textArea}`}>
                <span>最高 : {filteredData[0].maxtemp_c}℃</span>
                <span className={styles.itemName}>
                  最低 :{filteredData[0].mintemp_c}℃
                </span>
              </p>
            </>
          ) : (
            <p className={styles.textArea}>
              <span>最高</span>
              <span className={styles.emphasis}>
                {filteredData[0].maxtemp_c}
              </span>
              ℃<span className={styles.itemName}>最低</span>
              <span className={styles.emphasis}>
                {filteredData[0].mintemp_c}
              </span>
              ℃
            </p>
          )}
        </div>
      );
    case "rain":
      return (
        <div className={styles.container}>
          <p className={styles.textArea}>
            総雨量 <span className={styles.emphasis}>{totalprecip_mm}mm</span>
          </p>
          <div>
            {filteredData[0].daily_will_it_rain ? (
              <p className={`${styles.smallText} ${styles.textArea}`}>雨がふるでしょう。</p>
            ) : (
              <p className={`${styles.smallText} ${styles.textArea}`}>雨の心配はありません。</p>
            )}
            {totalprecip_mm > 50 && totalprecip_mm < 100 && (
              <p className={`${styles.smallText} ${styles.textArea}`}>
                1日の総雨量が50mmを超えます、注意してください。
              </p>
            )}
            {totalprecip_mm > 100 && (
              <p className={`${styles.smallText} ${styles.textArea}`}>
                1日の総雨量が50mmを超えます。安全な行動を心がけてください。
              </p>
            )}
          </div>
        </div>
      );
    case "humidity":
      return (
        <div className={styles.container}>
          {specificDateData === 0 ? (
            <>
              <p className={styles.textArea}>
                現在<span className={styles.emphasis}>{current.humidity}%</span>
              </p>
              <p className={styles.textArea}>
                <span className={styles.smallText}>
                  平均湿度 {filteredData[0].avghumidity}%
                </span>
              </p>
            </>
          ) : (
            <p className={styles.textArea}>
              平均湿度
              <span className={styles.emphasis}>
                {filteredData[0].avghumidity}
              </span>
              %
            </p>
          )}
        </div>
      );
    case "snow":
      return (
        <div className={styles.container}>
          <p className={styles.textArea}>
            降雪量 <span className={styles.emphasis}>{totalsnow_cm}cm</span>
          </p>
          <div>
            {filteredData[0].daily_will_it_snow ? (
              <p className={`${styles.smallText} ${styles.textArea}`}>雪が降るでしょう。</p>
            ) : (
              <p className={`${styles.smallText} ${styles.textArea}`}>雪の心配はありません。</p>
            )}
            {totalsnow_cm >= 10 && (
              <p className={`${styles.smallText} ${styles.textArea}`}>
                降雪量が10cmを超えるでしょう。大雪に注意してください。
              </p>
            )}
            {totalsnow_cm >= 5 && filteredData[0].totalsnow_cm <= 10 && (
              <p className={`${styles.smallText} ${styles.textArea}`}>
                5cm以上の積雪が見込まれます。外出の際にはご注意ください。
              </p>
            )}
          </div>
        </div>
      );
    case "atmosphere":
      return (
        <div className={styles.container}>
          <p className={styles.textArea}>
            平均気圧 <span className={styles.emphasis}>{avgAtmos}</span>hPa
          </p>
          <p className={styles.textArea}>
            <span className={styles.smallText}>最高 {maxAtmos}hPa</span>{" "}
            <span className={styles.smallText}>最低 {minAtmos}hPa</span>
          </p>
        </div>
      );
    case "wind":
      if (current.gust_kph && current.wind_kph) {
        return (
          <div className={styles.container}>
            {specificDateData === 0 ? (
              <>
                <p className={styles.textArea}>
                  {wind_dir}からの風
                  <span className={styles.emphasis}>
                    {Math.round((current.wind_kph / KPH_TO_MPS) * 10) / 10}
                    m/s
                  </span>
                </p>
                <p className={styles.textArea}>
                  <span className={styles.smallText}>
                    最大{Math.round((current.gust_kph / KPH_TO_MPS) * 10) / 10}
                    m/s
                  </span>
                </p>
              </>
            ) : (
              <p className={styles.textArea}>
                風速
                <span className={styles.emphasis}>
                  {Math.round((minWind_kph / KPH_TO_MPS) * 10) / 10}
                </span>
                m/s ～
                <span className={styles.emphasis}>
                  {Math.round((maxWind_kph / KPH_TO_MPS) * 10) / 10}
                </span>
                m/s
              </p>
            )}
          </div>
        );
      } else {
        return null;
      }
    case "uv":
      return (
        <div className={styles.container}>
          <p className={styles.textArea}>
            UV指数 <span className={styles.emphasis}>{maxUv}</span>
            {maxUv <= 2 && <span className={styles.smallText}>弱い</span>}
            {maxUv > 2 && maxUv <= 5 && (
              <span className={styles.smallText}>普通</span>
            )}
            {maxUv > 5 && maxUv <= 7 && (
              <span className={styles.smallText}>強い</span>
            )}
            {maxUv > 7 && maxUv <= 10 && (
              <span className={styles.smallText}>非常に強い</span>
            )}
            {maxUv > 10 && (
              <span className={styles.smallText}>日中の外出は危険</span>
            )}
          </p>
        </div>
      );
  }
}