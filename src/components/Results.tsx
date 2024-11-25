import { useContext } from 'react';
import { AppContext } from '../context';
import { AppContextType } from '../types/types';
import ResultsForOneDay from "./ResultsForOneDay";
import ResultsWeekly from './ResultsWeekly';
import styles from '../styles/results.module.css';


const Results = () => {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  if (!contextValues) {
    return <p>Loading...</p>;
  }
  const { country, region, text, icon, temperature, maxtemp_c, mintemp_c } = contextValues.todayBasicData;
  return (
    <>
      {contextValues.isData && (
      <>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>
            {region} / {country}
          </h3>
          <p className={styles.semiTitle}>{text}</p>
          <img className={styles.img} src={icon} alt={text} />
          <p className={styles.temp}>{temperature}℃</p>
          <div className={styles.flexContainer}>
            <p className={styles.flexParagraph}>
              <span className={styles.verticalText}>最高</span>
              <span className={styles.oblong}>{maxtemp_c}℃</span>
            </p>
            <p className={styles.flexParagraph}>
              <span className={styles.verticalText}>最低</span>
              <span className={styles.oblong}>{mintemp_c}℃</span>
            </p>
          </div>
        </div>
          <ResultsForOneDay />
          <ResultsWeekly/>
      </>
      )}
    </>
  );
};

export default Results;