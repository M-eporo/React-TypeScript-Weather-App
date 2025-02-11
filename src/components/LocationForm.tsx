import styles from "../styles/locationForm.module.css";
import Button from "./Button";
import Input from "./Input";
import { useEffect, useState, useContext } from "react";
import { useAppSelector } from "../app/hooks";
import { db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { AppContextType } from "../types/types";
import { AppContext } from "../context";

const LocationForm = () => {
  const contextValues: AppContextType | undefined = useContext(AppContext);
  //ロケーション登録用のState
  const [location, setLocation] = useState("");
  const user = useAppSelector((state => state.user.user));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (location && user) {
      try {
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          userName: user.displayName,
          location: location
        });
        alert("地域名を登録しました。");
      } catch (err) {
        console.error(err, "エラーです。");
      }
    }
    setLocation("");
  };

  //ログイン後に登録された地域名を取得
  useEffect(() => {
    if (!user) return;
    const fetchLocation = async () => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const fetchedLocation = docSnap.data().location;
        contextValues?.setInitLocation(fetchedLocation);
        contextValues?.setCity(fetchedLocation);
      }
    };
    fetchLocation();
  },[user]);
  return (
    <div>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <Input
          inputType="text"
          value={location}
          name="myLocation"
          id="myLocation"
          placeholder="地域を登録"
          onChange={setLocation}
          inHeader={true}
        />
        <Button
          btnType="submit"
          text="登録"
          width={75}
          margin="0.4em 0 0 auto"
          padding="0.5em"
        />
      </form>
    </div>
  )
}

export default LocationForm