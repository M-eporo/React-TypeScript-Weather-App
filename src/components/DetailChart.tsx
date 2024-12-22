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
import type { AreaChartDataType, CustomToolTipType } from "../types/types";

const yAxisOfRainTicks = [10, 30, 60];
const yAxisOfRainFormatter = (value: number) => {
  if (value === 10) return "弱い";
  if (value === 30) return "中程度";
  if (value === 60) return "激しい";
  return "";
};

const yAxisOfSnowTicks = [5, 20, 40];
const yAxisOfSnowFormatter = (value: number) => {
  if (value === 5) return "少ない";
  if (value === 20) return "多い";
  if (value === 40) return "豪雪";
  return "";
}

const yAxisOfUvTicks = [2, 4, 6, 8, 10];
const yAxisOfUvFormatter = (value: number) => {
  if (value === 2) return "弱い";
  if (value === 4) return "中程度";
  if (value === 6) return "強い";
  if (value === 8) return "非常に強い";
  if(value=== 10) return "危険";
  return "";
}

export default function DetailChart({ chartData }: AreaChartDataType) {
  if (chartData[0].category === "rain" || chartData[0].category === "snow") {
    return (
      <>
        {/* 降水量 降雪量*/}
        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 5, right: 35, bottom: 5, left: 10 }}
            >
              <defs>
                <linearGradient id="colorPrecip" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="30%" stopColor="#738BFE" stopOpacity={0.5} />
                  <stop offset="50%" stopColor="#3543FC" stopOpacity={0.5} />
                </linearGradient>
              </defs>
              <defs>
                <linearGradient id="colorSnow" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="30%" stopColor="#fff" stopOpacity={0.5} />
                  <stop offset="50%" stopColor="#01F5EB" stopOpacity={0.5} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
              <XAxis
                dataKey="time"
                interval={2}
                tick={{ fontSize: "12px", fill: "#333" }}
              />
              {chartData[0].category === "rain" ? (
                <>
                  <YAxis
                    domain={[0, 80]}
                    tick={{ fontSize: "12px", fill: "#333" }}
                    ticks={yAxisOfRainTicks}
                    tickFormatter={yAxisOfRainFormatter}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                    itemStyle={{
                      fontSize: "12px",
                      fill: "#333",
                      color: "#333",
                    }}
                    labelStyle={{
                      fontSize: "12px",
                      fill: "#333",
                      color: "#333",
                    }}
                    formatter={(value, name) => {
                      const customNames: CustomToolTipType = {
                        data: "降水量",
                      };
                      return [value, customNames[name] || name];
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="data"
                    stroke="#4300FC"
                    strokeWidth={3}
                    fill="url(#colorPrecip)"
                  />
                </>
              ) : (
                <>
                  <YAxis
                    domain={[0, 60]}
                    tick={{ fontSize: "12px", fill: "#333" }}
                    ticks={yAxisOfSnowTicks}
                    tickFormatter={yAxisOfSnowFormatter}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                    itemStyle={{
                      fontSize: "12px",
                      fill: "#333",
                      color: "#333",
                    }}
                    labelStyle={{
                      fontSize: "12px",
                      fill: "#333",
                      color: "#333",
                    }}
                    formatter={(value, name) => {
                      const customNames: CustomToolTipType = {
                        data: "降雪量",
                      };
                      return [value, customNames[name] || name];
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="data"
                    stroke="#fff"
                    strokeWidth={3}
                    fill="url(#colorSnow)"
                  />
                </>
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
        {/* 降水確率 */}
        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 5, right: 35, bottom: 5, left: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
              <XAxis
                dataKey="time"
                interval={2}
                tick={{ fontSize: "12px", fill: "#333" }}
              />
              <YAxis
                domain={[0, 100]}
                tick={{ fontSize: "12px", fill: "#333" }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
                itemStyle={{
                  fontSize: "12px",
                  fill: "#333",
                  color: "#333",
                }}
                labelStyle={{
                  fontSize: "12px",
                  fill: "#333",
                  color: "#333",
                }}
                formatter={(value, name) => {
                  if (chartData[0].category === "rain") {
                    const customNames: CustomToolTipType = {
                      subData: "降水確率",
                    };
                    return [value, customNames[name] || name];
                  } else {
                    const customNames: CustomToolTipType = {
                      subData: "降雪確立",
                    };
                    return [value, customNames[name] || name];
                  }
                }}
              />
              {chartData[0].category === "rain" ? (
                <Area
                  type="monotone"
                  dataKey="subData"
                  stroke="#4300FC"
                  strokeWidth={3}
                  fill="url(#colorPrecip)"
                />
              ) : (
                <Area
                  type="monotone"
                  dataKey="subData"
                  stroke="#fff"
                  strokeWidth={3}
                  fill="url(#colorSnow)"
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </>
    );
  } else if (chartData[0].category === "humidity") {
    return (
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 35, bottom: 5, left: 10 }}
          >
            <defs>
              <linearGradient id="colorHumidity" x1="0" y1="1" x2="0" y2="0">
                <stop offset="10%" stopColor="#00E4E9" stopOpacity={0.5} />
                <stop offset="50%" stopColor="#F9FF00" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis
              dataKey="time"
              interval={2}
              tick={{ fontSize: "12px", fill: "#333" }}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fontSize: "12px", fill: "#333" }}
              tickFormatter={value => `${value}%`}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "transparent", border: "none" }}
              itemStyle={{ fontSize: "12px", fill: "#333", color: "#333" }}
              labelStyle={{ fontSize: "12px", fill: "#333", color: "#333" }}
              formatter={(value, name) => {
                const customNames: CustomToolTipType = {
                  data: "湿度",
                };
                return [value, customNames[name] || name];
              }}
            />
            <Area
              type="monotone"
              dataKey="data"
              stroke="#F9FF00"
              strokeWidth={3}
              fill="url(#colorHumidity)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (chartData[0].category === "wind") {
    return (
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 35, bottom: 5, left: 10 }}
          >
            <defs>
              <linearGradient id="colorGust" x1="0" y1="1" x2="0" y2="0">
                <stop offset="10%" stopColor="#ECF1E2" stopOpacity={0.5} />
                <stop offset="50%" stopColor="#7BDD41" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis
              dataKey="time"
              interval={2}
              tick={{ fontSize: "12px", fill: "#333" }}
            />
            <YAxis tick={{ fontSize: "12px", fill: "#333" }}
              tickFormatter={value => `${value}m/s`} />
            <Tooltip
              contentStyle={{ backgroundColor: "transparent", border: "none" }}
              itemStyle={{ fontSize: "12px", fill: "#333", color: "#333" }}
              labelStyle={{ fontSize: "12px", fill: "#333", color: "#333" }}
              formatter={(value, name) => {
                const customNames: CustomToolTipType = {
                  subData: "突風",
                  data: "風速",
                };
                return [value, customNames[name] || name];
              }}
            />
            <Area
              type="monotone"
              dataKey="subData"
              stroke="#56972e"
              strokeWidth={3}
              fill="none"
            />
            <Area
              type="monotone"
              dataKey="data"
              stroke="#7BDD41"
              strokeWidth={3}
              fill="url(#colorGust)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (chartData[0].category === "atmosphere") {
    return (
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 35, bottom: 5, left: 25 }}
          >
            <defs>
              <linearGradient id="colorAtmosphere" x1="0" y1="1" x2="0" y2="0">
                <stop offset="40%" stopColor="#000" stopOpacity={0.8} />
                <stop offset="70%" stopColor="#0F0F0F" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis
              dataKey="time"
              interval={2}
              tick={{ fontSize: "12px", fill: "#333" }}
            />
            <YAxis
              domain={[950, 1050]}
              tick={{ fontSize: "12px", fill: "#333" }}
              tickFormatter={value => `${value}hPa`}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "transparent", border: "none" }}
              itemStyle={{ fontSize: "12px", fill: "#333", color: "#ccc" }}
              labelStyle={{ fontSize: "12px", fill: "#333", color: "#ccc" }}
              formatter={(value, name) => {
                const customNames: CustomToolTipType = {
                  data: "気圧",
                };
                return [value, customNames[name] || name];
              }}
            />
            <Area
              type="monotone"
              dataKey="data"
              stroke="#333"
              strokeWidth={3}
              fill="url(#colorAtmosphere)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  } else if (chartData[0].category === "uv") {
    return (
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 35, bottom: 5, left: 25 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="1" x2="0" y2="0">
                <stop offset="15%" stopColor="#7400E9" stopOpacity={0.5} />
                <stop offset="30%" stopColor="#EA00FF" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis
              dataKey="time"
              interval={2}
              tick={{ fontSize: "12px", fill: "#333" }}
            />
            <YAxis domain={[0, 11]} tick={{ fontSize: "12px", fill: "#333" }} ticks={yAxisOfUvTicks} tickFormatter={yAxisOfUvFormatter} />
            <Tooltip
              contentStyle={{ backgroundColor: "transparent", border: "none" }}
              itemStyle={{ fontSize: "12px", fill: "#333", color: "#333" }}
              labelStyle={{ fontSize: "12px", fill: "#333", color: "#333" }}
              formatter={(value, name) => {
                const customNames: CustomToolTipType = {
                  data: "uv",
                };
                return [value, customNames[name] || name];
              }}
            />
            <Area
              type="monotone"
              dataKey="data"
              stroke="#C850C0"
              strokeWidth={3}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return (
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 35, bottom: 5, left: 10 }}
          >
            <defs>
              <linearGradient id="color" x1="0" y1="1" x2="0" y2="0">
                <stop offset="20%" stopColor="#00FAFF" stopOpacity={0.5} />
                <stop offset="40%" stopColor="#F93A22" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
            <XAxis
              dataKey="time"
              scale="point"
              interval={2}
              tick={{ fontSize: "12px", fill: "#333" }}
            />
            <YAxis
              allowDecimals={false}
              tick={{ fontSize: "12px", fill: "#333" }}
              tickFormatter={(value) => `${value}℃`}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "transparent", border: "none" }}
              labelStyle={{ fontSize: "12px", fill: "#333", color: "#333" }}
              itemStyle={{ fontSize: "12px", fill: "#333", color: "#333" }}
              formatter={(value, name) => {
                const customNames: CustomToolTipType = {
                  data: "気温",
                };
                return [value, customNames[name] || name];
              }}
            />
            <Area
              type="monotone"
              dataKey="data"
              stroke="#F93A22"
              strokeWidth={3}
              fill="url(#color)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}