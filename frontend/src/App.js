import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Quora from "./components/Quora";
import { login, selectUser } from "./feature/userSlice";
import Login from "./components/auth/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
        console.log("Auth-User:", authUser);
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      {/* <h1>This is for testing</h1> */}
      {user ? <Quora /> : <Login />}
    </div>
  );
}

export default App;
