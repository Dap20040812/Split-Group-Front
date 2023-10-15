import React, {useEffect} from 'react';
import getUser from './query/loginClaro';
import {useDispatch} from "react-redux"
import {setUserLogin} from './features/user/UserSlice'
function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    const setUser = async () => {
      var response = await getUser();
      dispatch(setUserLogin({
        name: response.name,
        uid: response.id,       
      }))
      console.log(response);
    }

    setUser();
  }, []);


  return (
    <div className="App">

    </div>
  );
}

export default App;
