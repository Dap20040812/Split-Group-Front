import MainPage from "./pages/MainPage";

import React, {useEffect} from 'react';
import getUser from './query/loginClaro';
import {useDispatch} from "react-redux"
import {setUserLogin} from './features/user/UserSlice'
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router-dom/dist"
function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    const setUser = async () => {
      var response = await getUser();
      dispatch(setUserLogin({
        name: response[0].name,
        uid: response[0].id,       
      }))
    }

    setUser();
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
