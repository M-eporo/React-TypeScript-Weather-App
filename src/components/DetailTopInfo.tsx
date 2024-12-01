import { useContext } from "react";
import { AppContext } from "../context";
import type { AppContextType, CurrentType } from "../types/types";
import { KPH_TO_MPS } from "../constants";

export default function DetailTopInfo() {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  if (!contextValues) {
    return <p>データが存在しません。</p>;
  }
  //detailTopData = dayデータ
  const { iconSort, specificDateData, detailTopData } = contextValues;
  //現在時刻のデータ-current
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
  //平均湿度
  const avghumidity = filteredData[0].avghumidity;
  //総降雪量
  const totalsnow_cm = filteredData[0].totalsnow_cm;
  //console.log(iconSort);
  //console.log(specificDateData);
  console.log(filteredData[0]);

  console.log(detailChartData);
  console.log(current);
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
      break;
  }

  //maxUv
  const maxUv = detailChartData.reduce(
    (accumulator, currentValue) => Math.max(accumulator, currentValue.uv), -Infinity);
  switch (iconSort) {
    case "temperature":
      return (
        <div>
          <p>現在 : {current.temp_c}℃</p>
          <p>最高 : {filteredData[0].maxtemp_c} 最低 : {filteredData[0].mintemp_c}</p>
          <p>体感 {current.feelslike_c}℃</p>
        </div>
      );
    case "rain":
      return (
        <div>
          <ul>
            <li>総雨量 : {totalprecip_mm}mm</li>
            {filteredData[0].daily_will_it_rain ? (
              <li>今日は雨がふるでしょう。</li>
            ) : (
              <li>今日は雨の心配はありません。</li>
            )}
            {totalprecip_mm > 50 && totalprecip_mm < 100 && (
              <li>1日の総雨量が50mmを超えます。注意してください。</li>
            )}
            {totalprecip_mm > 100 && (
              <li>
                1日の総雨量が50mmを超えます。安全な行動を心がけてください。
              </li>
            )}
          </ul>
        </div>
      );
    case "humidity":
      return (
        <div>
          <ul>
            <li>現在 : {current.humidity}%</li>
            <li>平均湿度 : {filteredData[0].avghumidity}%</li>
            {avghumidity <= 40 && <li>空気が乾燥しています。</li>}
            {avghumidity > 40 && avghumidity < 60 && <li>快適な湿度です。</li>}
            {avghumidity > 60 && avghumidity < 70 && (
              <li>少し蒸し暑く感じるかもしれません。</li>
            )}
            {avghumidity > 70 && <li>湿度が高くじめじめしています。</li>}
          </ul>
        </div>
      );
    case "snow":
      return (
        <div>
          <ul>
            <li>降雪量 : {totalsnow_cm}CM</li>
            {filteredData[0].daily_will_it_snow ? (
              <li>今日は雪が降るでしょう。</li>
            ) : (
              <li>今日は雪の心配はありません。</li>
            )}
            {totalsnow_cm >= 10 && (
              <li>降雪量が10cmを超えるでしょう。大雪に注意してください。</li>
            )}
            {totalsnow_cm >= 5 && filteredData[0].totalsnow_cm <= 10 && (
              <li>
                5cm以上の積雪が見込まれます。外出の際にはご注意ください。
              </li>
            )}
          </ul>
        </div>
      );
    case "atmosphere":
      return (
        <div>
          <p>平均気圧 : {avgAtmos}hPa</p>
          <p>
            最高: {maxAtmos}hPa 最低 : {minAtmos}hPa
          </p>
        </div>
      );
    case "wind":
      return (
        <div>
          <ul>
            <li>最大風速 : {Math.round((filteredData[0].maxwind_kph / KPH_TO_MPS) * 10) / 10}m/s</li>
            <li>{wind_dir}からの風 {Math.round((current.wind_kph / KPH_TO_MPS) * 10) / 10}m/s</li>
          </ul>
        </div>
      );
    case "uv":
      return (
        <div>
          <p>{maxUv}</p>
          <ul>
            <li>つぎここから。数値に応じてテキストを変える</li>
          </ul>
        </div>
      );
  }
}