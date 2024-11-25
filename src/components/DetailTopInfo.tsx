import { useContext } from "react";
import { AppContext } from "../context";
import { AppContextType } from "../types/types";

export default function DetailTopInfo() {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  if (!contextValues) {
    return <p>データが存在しません。</p>
  }
  const { maxtemp_c, mintemp_c, icon } = contextValues.todayBasicData;

  return (
    <div>
      <p>最高: { maxtemp_c }℃</p>
      <p>最低: { mintemp_c }℃</p>
      <img src={icon} alt="天気のアイコン" />
    </div>
  );
}