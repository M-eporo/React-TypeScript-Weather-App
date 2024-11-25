import { Routes, Route } from "react-router-dom";
import ContextProvider from "./context";
import Home from "./page/Home";
import Detail from "./page/Detail";
//import Forecast from "./page/Forecast";


const App = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail" element={<Detail/>}/>
      </Routes>
    </ContextProvider>
  );
};

export default App;