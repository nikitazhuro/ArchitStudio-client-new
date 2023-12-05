import React, { FC } from "react";
import AppRouter from "./lib/router/AppRouter";

import './index.css';

import SidebarRoot from "./modules/Sidebar";
import SignInRoot from "./modules/SignIn";

const App: FC = () => {
  return (
    <SidebarRoot>
      <AppRouter />
      <SignInRoot />
    </SidebarRoot>
  )
}

export default App;