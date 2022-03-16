import {useEffect, useState} from 'react';
import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/UI/AppRouter/AppRouter";
import { AuthContext } from "./context";


const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // пока инфо об авторизации будем хранить в LocalStorage
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  });

  return (
    <AuthContext.Provider value = {{
      isAuth,
      setIsAuth,
      isLoading
    }} >
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
    </AuthContext.Provider>

  )
}


export default App;

