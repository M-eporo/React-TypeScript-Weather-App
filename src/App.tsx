import { Routes, Route } from "react-router-dom";
import ContextProvider from "./context";
import Home from "./page/Home";
import Detail from "./page/Detail";
import { useAppDispatch } from "./app/hooks";
import { useEffect } from "react";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

const App = () => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(login({
          uid: loginUser.uid,
          photo: loginUser.photoURL,
          email: loginUser.email,
          displayName: loginUser.displayName,
        }))
      } else {
        dispatch(logout());
      }
    })
  }, [dispatch]);
  
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