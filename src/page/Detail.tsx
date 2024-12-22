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
        <h2 className={styles.heading}>Weather Condition</h2>
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