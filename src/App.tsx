import { Routes, Route } from "react-router-dom";
import ContextProvider from "./context";
import Home from "./page/Home";
import Forecast from "./page/Forecast";

const App = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/forecast" element={<Forecast/>}/>
      </Routes>
    </ContextProvider>
  );
};

export default App;