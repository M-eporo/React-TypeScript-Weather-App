import Form from "../components/Form";
import Results from "../components/Results";
import DetailChart from "../components/DetailChart";
import ListButton from "../components/ListButton";
import Layout from "../layout";

export default function Home() {
  return (
      <Layout>
      <Form />
      <ListButton/>
      <DetailChart/>
      <Results/>
      </Layout>
  );
};