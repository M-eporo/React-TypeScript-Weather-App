import { useState, createContext, ReactNode } from "react";

type WeatherDataType = {
  country: string;
  region: string;
  text: string;
  img: string;
  temperature: string;
  humidity: string;
};
export type AppContextType = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeatherData: (e: React.FormEvent<HTMLFormElement>) => void;
  clearData: () => void;
  data: WeatherDataType;
  setIsData: React.Dispatch<React.SetStateAction<boolean>>;
  isData: boolean;
};
type ContextProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [city, setCity] = useState<string>("");
  const [data, setData] = useState<WeatherDataType>({
    country: "",
    region: "",
    text: "",
    img: "",
    temperature: "",
    humidity: "",
  });
  const [isData, setIsData] = useState<boolean>(false);

  const getWeatherData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCity("");
    setIsData(false);
    try{
      fetch(`https://api.weatherapi.com/v1/current.json?key=34b3480469844e629d1155210240208&q=${city}&aqi=no`)
      .then(res => res.json())
      .then(data => {
        setData({
          country: data.location.country,
          region: data.location.region,
          text: data.current.condition.text,
          img: data.current.condition.icon,
          temperature: `${data.current.temp_c}℃`,
          humidity: `${data.current.humidity}%`,
        });
      });
      setIsData(true);
    }
    catch(err){
      alert("Errorが発生しました。");
    }
  };

  const clearData = () => {
    setData({
      country: "",
      region: "",
      text: "",
      img: "",
      temperature: "",
      humidity: "",
    });
    setIsData(false);
  };

  const contextValue: AppContextType = {
    city: city,
    setCity: setCity,
    getWeatherData: getWeatherData,
    clearData: clearData,
    data: data,
    setIsData: setIsData,
    isData: isData,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;