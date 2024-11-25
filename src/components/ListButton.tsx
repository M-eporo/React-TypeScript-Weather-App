//リストの表示にアニメーションを追加

import { useState, useContext } from "react";
import { AppContext } from "../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "../fontAwesome";
import styles from "../styles/listButton.module.css";
import type { AppContextType } from "../types/types";

export default function ListButton() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const contextValues: AppContextType | undefined = useContext(AppContext);

  if (!contextValues) {
    return <p>データが存在しません。</p>
  }
  
  const toggleShow = () => {
    setIsShow(prevState => !prevState);
  };
  
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget as HTMLDivElement;
    if (target.dataset.icon) {
      contextValues.setTopIcon(target.dataset.icon);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBtn} onClick={toggleShow}>
        <FontAwesomeIcon icon={contextValues.topIcon as IconProp} />
        <FontAwesomeIcon icon={"fa-solid fa-chevron-down" as IconProp} />
      </div>

      <div className={`${styles.list} ${isShow ? styles.open : ""}`}>
        <div
          className={styles.item}
          onClick={handleClick}
          data-icon="fa-solid fa-temperature-three-quarters"
        >
          <FontAwesomeIcon
            icon={"fa-solid fa-temperature-three-quarters" as IconProp}
          />
          <p>気温</p>
        </div>

        <div
          className={styles.item}
          onClick={handleClick}
          data-icon="fa-solid fa-droplet"
        >
          <FontAwesomeIcon icon={"fa-solid fa-droplet" as IconProp} />
          <p>湿度</p>
        </div>

        <div
          className={styles.item}
          onClick={handleClick}
          data-icon="fa-solid fa-cloud-showers-heavy"
        >
          <FontAwesomeIcon
            icon={"fa-solid fa-cloud-showers-heavy" as IconProp}
          />
          <p>降水</p>
        </div>

        <div
          className={styles.item}
          onClick={handleClick}
          data-icon="fa-regular fa-snowflake"
        >
          <FontAwesomeIcon icon={"fa-regular fa-snowflake" as IconProp} />
          <p>降雪</p>
        </div>

        <div
          className={styles.item}
          onClick={handleClick}
          data-icon="fa-solid fa-gauge"
        >
          <FontAwesomeIcon icon={"fa-solid fa-gauge" as IconProp} />
          <p>気圧</p>
        </div>

        <div
          className={styles.item}
          onClick={handleClick}
          data-icon="fa-solid fa-wind"
        >
          <FontAwesomeIcon icon={"fa-solid fa-wind" as IconProp} />
          <p>風速</p>
        </div>

        <div
          className={styles.item}
          onClick={handleClick}
          data-icon="fa-regular fa-sun"
        >
          <FontAwesomeIcon icon={"fa-regular fa-sun" as IconProp} />
          <p>UV</p>
        </div>
      </div>
    </div>
  );
}