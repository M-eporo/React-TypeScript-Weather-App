import Layout from "../layout/index";
import Calender from "../components/Calender";
import ListButton from "../components/ListButton";
import styles from "../styles/detail.module.css";

export default function Detail() {
  return (
    <>
      <Layout>
        <h2 className={styles.heading}>気象状況</h2>
        <Calender />
        <ListButton/>
      </Layout>
    </>
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