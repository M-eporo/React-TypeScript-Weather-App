import { useContext } from "react";
import { AppContext } from "../context";
import { AppContextType } from "../context";

const Results = () => {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  if (!contextValues) {
    return <p>Loading...</p>;
  }
  const { country, region, text, img, temperature, humidity } = contextValues.data;
  return (
    <>
      {contextValues.isData && 
      <div>
        <h3>{country}<span>{region}</span></h3>
        <div>
          <div>
            <img src={img} alt={text}/>
            {text}
          </div>
          <div>
            <p>温度：{temperature}</p>
            <p>湿度：{humidity}</p>
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default Results;