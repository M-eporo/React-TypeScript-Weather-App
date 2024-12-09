import { useContext } from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import Layout from "../layout";
import { AppContext } from "../context";
import type { AppContextType } from "../types/types";
  
export default function Home() {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  if (!contextValues) {
    return null;
  }
  return (
    <Layout>
      <Form />
      <Results />
    </Layout>
  );
};