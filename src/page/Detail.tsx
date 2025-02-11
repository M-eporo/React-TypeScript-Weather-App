import Layout from "../layout/index";
import Calender from "../components/Calender";
import DetailTopInfo from "../components/DetailTopInfo";
import ListButton from "../components/ListButton";
import ResultsDetail from "../components/ResultsDetail";
import styles from "../styles/detail.module.css";

export default function Detail() {
  return (
    
      <Layout>
        <ListButton />
        <div className={styles.flexContainer}>
          <Calender />
          <DetailTopInfo />
        </div>
        <ResultsDetail />
      </Layout>
    
  );
}