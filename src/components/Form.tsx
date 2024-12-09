import { useContext } from "react";
import { AppContext } from '../context';
import { AppContextType } from "../types/types";
import Button from "./Button";
import styles from '../styles/form.module.css';

const Form = () => {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  if(!contextValues){
    return <p>Loading...</p>;
  }
  return (
    <>
      <h2 className={styles.title}> </h2>
      <form 
        onSubmit={contextValues.getWeatherData}
        className={styles.form}
      >
        <input
          className={styles.input}
          onChange={e => contextValues.setCity(e.target.value)}
          value={contextValues.city}
          type="text"
          name="region"
          id="region"
          placeholder="地域を入力"
          required
        />
        <Button
          btnType="submit"
          text="送信"
          width={75}
          margin="0em 0.5em"
          padding="0.8em 0.4em"
        />
        <Button
          btnType="button"
          text="クリア"
          width={75}
          margin="0em 0.5em"
          padding="0.8em 0.4em"
          context
        />
      </form>        
    </>
  );
};

export default Form;