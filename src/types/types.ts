import { ReactNode } from  "react" ;

export type AppContextType = {
  allData: AllWeatherDataType;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeatherData: (e: React.FormEvent<HTMLFormElement>) => void;
  clearData: () => void;
  todayBasicData: WeatherDataType;
  setIsData: React.Dispatch<React.SetStateAction<boolean>>;
  isData: boolean;
  weeklyData: WeeklyDataType;
  onedayData: ForOnedayType;
  lineChartData: LineChartDataType;
  topIcon: string;
  setTopIcon: React.Dispatch<React.SetStateAction<string>>;
  iconSort: string;
  setIconSort: React.Dispatch<React.SetStateAction<string>>;
  setSpecificDateData: React.Dispatch<React.SetStateAction<number>>;
  detailChartData: HoursType;
};
//O
export type ChildrenPropsType = {
  children: ReactNode;
};
//O
export type ContainerPropsType = {
  large?: boolean;
}
//O
export type WeatherDataType = {
  country: string;
  region: string;
  text: string;
  icon: string;
  temperature: number;
  maxtemp_c: number;
  mintemp_c: number;
};
//O
export type ForOnedayType = {
  time: string;
  image: string;
  precipitation: number;
  temperature: number;
}[];

export type WeeklyDataType = {
  date: string;
  icon: string;
  daily_chance_of_rain: number;
  maxtemp_c: number;
  mintemp_c: number;
}[];
export type LineChartDataType = Array<{
  time: string;
  temp: number;
}[]>
export type ButtonType = {
  btnType: "submit" | "button" | "reset" | "button";
  text: string;
  width: number;
  margin: string;
  padding: string;
  context?: boolean;
};
type LocationType = {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
};
type CurrentType = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: ConditionType;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
};
type ConditionType = {
  text: string;
  icon: string;
  code: number;
};
type AstroType = {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: number;
  is_moon_up: number;
  is_sun_up: number;
};
type AlertType = {
  headline: string;
  msgtype: string;
  severity: string;
  urgency: string;
  areas: string;
  category: string;
  certainty: string;
  event: string;
  note: string;
  effective: string;
  expires: string;
  desc: string;
};
type AlertsType = {
  alert: AlertType[];
};
type DayType = {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: ConditionType;
  uv: number;
};
export type ForecastdayType = {
  date: string;
  date_epoch: number;
  day: DayType;
  astro: AstroType;
  hour: HoursType;
};
export type ForecastdaysType = {
  date: string;
  date_epoch: number;
  day: DayType;
  astro: AstroType;
  hour: HoursType;
}[];
type ForecastType = {
  forecast: ForecastdaysType;
};
export type HourType = {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: ConditionType;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  snow_cm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
};
export type HoursType = {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: ConditionType;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  snow_cm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
}[];
export type AllWeatherDataType = {
  location: LocationType;
  current: CurrentType;
  forecast: ForecastType;
  alerts: AlertsType;
} | undefined;