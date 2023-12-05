import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from ".";

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        {publicRoutes.map((route) => <Route path={route.path} element={<route.element />} />)}
      </Routes>
    </Suspense>
  )
}

export default AppRouter;