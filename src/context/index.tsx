import { useState, useEffect, createContext } from "react";
import { useLocation } from "react-router-dom";
import type {
  AppContextType,
  ChildrenPropsType,
  WeatherDataType,
  WeeklyDataType,
  ForOnedayType,
  HourType,
  HoursType,
  LineChartDataType,
  ForecastdayType,
  AllWeatherDataType,
} from "../types/types";

export const AppContext = createContext<AppContextType | undefined>(undefined);
const apikey = import.meta.env.VITE_WEATHER_API_KEY;

const ContextProvider = ({ children }: ChildrenPropsType) => {
  const [allData, setAllData] = useState<AllWeatherDataType>();
  const [city, setCity] = useState<string>("");
  const [todayBasicData, setTodayBasicData] = useState<WeatherDataType>({
    country: "",
    region: "",
    text: "",
    icon: "",
    temperature: 0,
    maxtemp_c: 0,
    mintemp_c: 0,
  });
  const [onedayData, setOnedayData] = useState<ForOnedayType>([]);
  const [isData, setIsData] = useState<boolean>(false);
  //3日間天気予報で使用
  const [weeklyData, setWeeklyData] = useState<WeeklyDataType>([]);
  //LineChartで使用
  const [lineChartData, setLineChartData] = useState<LineChartDataType>([]);
  //Detailページのリストアイコンボタンのトップアイコン
  //デフォルトは温度
  const [topIcon, setTopIcon] = useState<string>(
    "fa-solid fa-temperature-three-quarters"
  );
  //リストボタンに応じたデータを取得するためのアイコンの種類
  //デフォルトは温度
  const [iconSort, setIconSort] = useState<string>("temperature");
  //Detailページの日付ボタンに応じたデータを取得
  const [specificDateData, setSpecificDateData] = useState(0);
  //specificDateDataに応じた日付のデータ
  const [detailChartData, setDetailChartData] = useState<HoursType>([]);

  const location = useLocation();
  useEffect(() => {
    setIsData(false);
  }, [location, setIsData]);

  const getWeatherData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity("");
    setIsData(false);
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${city}&days=3&aqi=no&alerts=yes`
      );
      const weatherData = await response.json();
      setAllData(weatherData);
      //トップの予報
      setTodayBasicData({
        country: weatherData.location.country,
        region: weatherData.location.region,
        text: weatherData.current.condition.text,
        icon: weatherData.current.condition.icon,
        temperature: weatherData.current.temp_c,
        maxtemp_c: weatherData.forecast.forecastday[0].day.maxtemp_c,
        mintemp_c: weatherData.forecast.forecastday[0].day.mintemp_c,
      });

      //24時間予報
      const currentHour: number = new Date().getHours();
      let oneDayDate: ForOnedayType = [];
      for (let i = 0; i < 2; i++) {
        weatherData.forecast.forecastday[i].hour.forEach(
          (item: HourType, index: number) => {
            const isFirstDay = i === 0 && index >= currentHour;
            const isSecondDay = i === 1 && index < currentHour;
            if (isFirstDay || isSecondDay) {
              oneDayDate = oneDayDate.concat({
                time: item.time.split(" ")[1].slice(0, 2),
                image: item.condition.icon,
                precipitation: item.chance_of_rain,
                temperature: item.temp_c,
              });
            }
          }
        );
      }
      setOnedayData(oneDayDate);
      //3日間予報
      const forecastData = weatherData.forecast.forecastday.map(
        (day: ForecastdayType) => {
          return {
            date: day.date,
            icon: day.day.condition.icon,
            daily_chance_of_rain: day.day.daily_chance_of_rain,
            maxtemp_c: day.day.maxtemp_c,
            mintemp_c: day.day.mintemp_c,
          };
        }
      );
      setWeeklyData(forecastData);

      //LineChartで使用
      const hourData: {
        time: string;
        temp: number;
      }[] = [];
      weatherData.forecast.forecastday.forEach((item: ForecastdayType) => {
        item.hour.forEach((hourItem) => {
          hourData.push({
            time: `${hourItem.time.split(" ")[1].slice(0, 2)}時`,
            temp: hourItem.temp_c,
          });
        });
      });
      const hourDataParsed: Array<{ time: string; temp: number }[]> = [];
      for (let i = 0; i < hourData.length; i += 24) {
        const chunk = hourData.slice(i, i + 24);
        hourDataParsed.push(chunk);
      }
      setLineChartData(hourDataParsed);
      setIsData(true);

      //DetailChartで使用。
      const dataForDetailChart: HoursType = [];

      weatherData.forecast.forecastday.forEach(
        (item: ForecastdayType, index: number) => {
          if (specificDateData === index) {
            dataForDetailChart.push(...item.hour);
          }
        }
      );
      
      setDetailChartData(dataForDetailChart);
    } catch (err) {
      alert(`${err.message}。エラーです。`);
    }
  };
  //これはこのままで大丈夫なのか？
  const clearData = () => {
    setTodayBasicData({
      country: "",
      region: "",
      text: "",
      icon: "",
      temperature: 0,
      maxtemp_c: 0,
      mintemp_c: 0,
    });
    setIsData(false);
  };
  const contextValue: AppContextType = {
    allData: allData,
    city: city,
    setCity: setCity,
    getWeatherData: getWeatherData,
    clearData: clearData,
    todayBasicData: todayBasicData,
    setIsData: setIsData,
    isData: isData,
    weeklyData: weeklyData,
    onedayData: onedayData,
    lineChartData: lineChartData,
    topIcon: topIcon,
    setTopIcon: setTopIcon,
    iconSort: iconSort,
    setIconSort: setIconSort,
    setSpecificDateData: setSpecificDateData,
    detailChartData: detailChartData,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default ContextProvider;