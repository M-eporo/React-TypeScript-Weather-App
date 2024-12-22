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
  const toggleShow = () => {
    setIsShow((prevState) => !prevState);
  };
  if (!contextValues) {
    return <p>データが存在しません。</p>
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget as HTMLDivElement;
    if (target.dataset.iconName && target.dataset.iconSort) {
      contextValues.setTopIcon(target.dataset.iconName);
      contextValues.setIconSort(target.dataset.iconSort);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBtn} onClick={toggleShow}>
        <FontAwesomeIcon icon={contextValues.topIcon as IconProp} />
        <FontAwesomeIcon icon={"fa-solid fa-chevron-down" as IconProp} />
      </div>

      <div className={`${styles.list} ${isShow ? styles.open : ""}`} >
        <div
          className={styles.item}
          onClick={handleClick}
          data-icon-name="fa-solid fa-temperature-three-quarters"
          data-icon-sort="temperature"
        >
          <FontAwesomeIcon
            icon={"fa-solid fa-temperature-three-quarters" as IconProp}
          />
          <p>気温</p>
        </div>
        <div
          className={styles.item}
          onClick={handleClick}
          data-icon-name="fa-solid fa-droplet"
          data-icon-sort="humidity"
        >
          <FontAwesomeIcon icon={"fa-solid fa-droplet" as IconProp} />
          <p>湿度</p>
        </div>
        <div
          className={styles.item}
          onClick={handleClick}
          data-icon-name="fa-solid fa-cloud-showers-heavy"
          data-icon-sort="rain"
        >
          <FontAwesomeIcon
            icon={"fa-solid fa-cloud-showers-heavy" as IconProp}
          />
          <p>降水</p>
        </div>
        <div
          className={styles.item}
          onClick={handleClick}
          data-icon-name="fa-regular fa-snowflake"
          data-icon-sort="snow"
        >
          <FontAwesomeIcon icon={"fa-regular fa-snowflake" as IconProp} />
          <p>降雪</p>
        </div>
        <div
          className={styles.item}
          onClick={handleClick}
          data-icon-name="fa-solid fa-gauge"
          data-icon-sort="atmosphere"
        >
          <FontAwesomeIcon icon={"fa-solid fa-gauge" as IconProp} />
          <p>気圧</p>
        </div>
        <div
          className={styles.item}
          onClick={handleClick}
          data-icon-name="fa-solid fa-wind"
          data-icon-sort="wind"
        >
          <FontAwesomeIcon icon={"fa-solid fa-wind" as IconProp} />
          <p>風速</p>
        </div>
        <div
          className={styles.item}
          onClick={handleClick}
          data-icon-name="fa-regular fa-sun"
          data-icon-sort="uv"
        >
          <FontAwesomeIcon icon={"fa-regular fa-sun" as IconProp} />
          <p>UV</p>
        </div>
      </div>
    </div>
  );
}