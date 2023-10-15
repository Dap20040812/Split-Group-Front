import MainPage from "./pages/MainPage";
import React, {useEffect, useState} from 'react';
import getUser from './query/loginClaro';
import {useDispatch, useSelector} from "react-redux"
import {selecUserUid, setUserLogin} from './features/user/UserSlice'
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
  }, []);




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
