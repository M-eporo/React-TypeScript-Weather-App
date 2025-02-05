import { signInWithPopup } from "firebase/auth";
import styles from "../styles/login.module.css";
import { auth, provider } from "../firebase";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .catch((err) => {
        alert(err.message);
    });
  };
  return (
    <div className={styles.container}>
      <button onClick={signIn} className={styles.loginBtn}>Login</button>
    </div>
  );
}

export default Login;