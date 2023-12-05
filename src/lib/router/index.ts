import React, { lazy } from "react";

const CalcPageRoot = lazy(() => import("../../pages/calc"));
const ProjectsPageRoot = lazy(() => import("../../pages/projects"));


export const publicRoutes = [
  {path: '/calc', element: CalcPageRoot},
  {path: '/projects', element: ProjectsPageRoot},
  {path: '*', element: CalcPageRoot}
]