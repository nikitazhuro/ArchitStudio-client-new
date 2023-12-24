import React, { FC, useEffect, useState } from "react";
import AppRouter from "./lib/router/AppRouter";
import { jwtDecode} from 'jwt-decode';

import './index.css';

import SidebarRoot from "./modules/Sidebar";
import SignInRoot from "./modules/SignIn";
import { useUserSliceActions } from "./lib/store/user";
import { useAuthCheckMutation } from "./lib/store/api/userApi";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

const App: FC = () => {
  const [authCheckFetch, { data: checkIsComplete }] = useAuthCheckMutation();

  const { setUser, clearUser } = useUserSliceActions();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    authCheckFetch()
      .then(() => {
        const token = localStorage.getItem('access_token');        
        const data = jwtDecode(token);
        
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <SidebarRoot>
      <AppRouter />
      <SignInRoot />
    </SidebarRoot>
  )
}

export default App;