import { useContext } from "react";
import { AppContext } from "../context";
import { AppContextType } from "../context";

const Form = () => {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  return (
    <div>
      {contextValues ?
        <form onSubmit={contextValues.getWeatherData}>
          <input
            onChange={e => contextValues.setCity(e.target.value)}
            value={contextValues.city}
            type="text"
            name="region"
            id="region"
            placeholder="地域名"
            required
          />
          <button type="submit">送信</button>
          <button type="button" onClick={contextValues.clearData}>クリア</button>
        </form>
        :
        <p>Loading...</p>
      }
    </div>
  );
};

export default Form;