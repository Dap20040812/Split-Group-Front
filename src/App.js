import MainPage from "./pages/MainPage";
import React, {useEffect } from 'react';
import getUser from './query/loginClaro';
import {useDispatch } from "react-redux"
import { setUserLogin} from './features/user/UserSlice'
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router-dom/dist"
function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await getUser();
        const user = response[0];
        dispatch(setUserLogin({
          name: user.name,
          uid: user.id,
        }));
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
        fetchUser();
  }, [dispatch]);




  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<MainPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
