import { useContext } from "react";
import { AppContext } from '../context';
import { AppContextType } from "../types/types";
import Button from "./Button";
import Input from "./Input";
import styles from '../styles/form.module.css';

const Form = () => {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  if(!contextValues){
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <form onSubmit={contextValues.getWeatherData} className={styles.form}>
        <Input
          inputType="text"
          value={contextValues.city}
          name="region"
          id="region"
          placeholder="地域を入力"
          onChange={contextValues.setCity}
          inHeader={false}
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
    </div>
  );
};

export default Form;