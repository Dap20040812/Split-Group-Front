import MainPage from "./pages/MainPage";

import React, {useEffect} from 'react';
import getUser from './query/loginClaro';
import {useDispatch, useSelector} from "react-redux"
import {selecUserUid, setUserLogin} from './features/user/UserSlice'
function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    const setUser = async () => {
      await getUser().then((response) => {
        dispatch(setUserLogin({
          name: response[0].name,
          uid: response[0].id,       
        }))
        console.log(response[0].id)
      })
    }
    setUser();
  }, []);

  const userId = useSelector(selecUserUid)


  return (
    <div className="App">
      <MainPage/>
      {userId}
    </div>
  );
}

export default App;
