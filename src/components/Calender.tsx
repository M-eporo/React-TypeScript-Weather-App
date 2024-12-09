import { useContext, useState } from "react";
import { AppContext } from "../context";
import type { AppContextType } from "../types/types";
import styles from "../styles/calender.module.css";

export default function Calender() {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  const [activeBtn, setActiveBtn] = useState(0);
  if (!contextValues) {
    return <p>データが存在しません。</p>;
  }
  const now = new Date();
  const today = now.getDate();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  const dayAfterTomorrow = new Date(now);
  dayAfterTomorrow.setDate(now.getDate() + 2);

  const handleClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    id: number
  ) => {
    const target = e.currentTarget as HTMLLIElement;
    contextValues.setSpecificDateData(parseInt(`${target.dataset.date}`, 10));
    setActiveBtn(id);
  };

  return (
    <ul className={styles.calender}>
      <li
        data-date={0}
        onClick={(e) => handleClick(e, 0)}
        className={activeBtn === 0 ? styles.active : ""}
      >
        <p>
          {new Intl.DateTimeFormat("ja-JP", { weekday: "short" }).format(now)}
        </p>
        <p>{today}</p>
      </li>
      <li
        data-date={1}
        onClick={(e) => handleClick(e, 1)}
        className={activeBtn === 1 ? styles.active : ""}
      >
        <p>
          {new Intl.DateTimeFormat("ja-JP", { weekday: "short" }).format(
            tomorrow
          )}
        </p>
        <p>{tomorrow.getDate()}</p>
      </li>
      <li
        data-date={2}
        onClick={(e) => handleClick(e, 2)}
        className={activeBtn === 2 ? styles.active : ""}
      >
        <p>
          {new Intl.DateTimeFormat("ja-JP", { weekday: "short" }).format(
            dayAfterTomorrow
          )}
        </p>
        <p>{dayAfterTomorrow.getDate()}</p>
      </li>
    </ul>
  );
}

//2024-11-10の形式を取得
//<li data-date={dayAfterTomorrowInISO.toISOString().split("T")[0]}></li>
//const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  //const tomorrowInISO = new Date(now);
  //tomorrowInISO.setDate(now.getDate() + 1);
  //const dayAfterTomorrow = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000);
  //const dayAfterTomorrowInISO = new Date(now);
  //dayAfterTomorrowInISO.setDate(now.getDate() + 2);