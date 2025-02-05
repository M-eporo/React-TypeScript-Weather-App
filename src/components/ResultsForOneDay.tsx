import { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import { AppContext } from '../context';
import { AppContextType } from '../types/types';
import styles from '../styles/resultsForOneday.module.css';

export default function ResultsForOneDay() {
  const location = useLocation();
  const contextValues: AppContextType | undefined = useContext(AppContext);
  if (!contextValues) {
    return <p>Loading...</p>
  }
  if (location.pathname !== "/detail") {
    return (
      <div className={styles.horizontallyOverflow}>
        <div className={styles.flexContainer}>
          {contextValues.onedayData.map((item, index: number) => (
            <div key={item.time} className={styles.itemWrapper}>
              <Link to="/detail" >
                {index < 1 ? (
                  <p className={styles.time}>現在</p>
                ) : (
                  <p className={styles.time}>
                    {item.time.charAt(0) === "0"
                      ? `${item.time.slice(1)}時`
                      : `${item.time}時`}
                  </p>
                )}
                <img className={styles.img} src={item.image} alt="weather-icon" />
                {(item.precipitation > 0 && !item.chance_of_snow) &&(
                  <p className={styles.rain}>{item.precipitation}%</p>
                )}
                {item.chance_of_snow > 0 && (
                  <p className={styles.snow}>{item.chance_of_snow}%</p>
                )}
                <p className={styles.temp}>{item.temperature}℃</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.horizontallyOverflow}>
        <div className={styles.flexContainer}>
          {contextValues.onedayData.map((item, index: number) => (
            <div key={item.time} className={styles.itemWrapper}>
                {index < 1 ? (
                  <p className={styles.time}>現在</p>
                ) : (
                  <p className={styles.time}>
                    {item.time.charAt(0) === "0"
                      ? `${item.time.slice(1)}時`
                      : `${item.time}時`}
                  </p>
                )}
                <img
                  className={styles.img}
                  src={item.image}
                  alt="weather-icon"
                />
                {item.precipitation > 0 && (
                  <p className={styles.rain}>{item.precipitation}%</p>
                )}
                <p className={styles.temp}>{item.temperature}℃</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};