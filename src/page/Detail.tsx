import Layout from "../layout/index";
import Calender from "../components/Calender";
import DetailTopInfo from "../components/DetailTopInfo";
import ListButton from "../components/ListButton";
import ResultsDetail from "../components/ResultsDetail";
import styles from "../styles/detail.module.css";

export default function Detail() {
  return (
    <div className="detail">
      <Layout>
        <h2 className={styles.heading}>気象状況</h2>
        <ListButton />
        <Calender />
        <div className={styles.flexContainer}>
          <DetailTopInfo />
        </div>
        <ResultsDetail />
      </Layout>
    </div>
  );
}

/*
icon
今の気温
下記グラフ
--その日の最高、最低気温
--体感温度
降水確率のグラフ
降水量
降雪量
*/