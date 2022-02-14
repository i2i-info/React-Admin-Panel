/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Navigate } from "react-router-dom";

import Dashboard from "./modules/Dashbord/dashbord";
import Buttons from "./pages/Buttons/buttons";
import Typography from "./pages/Typography/typography";
import Element from "./pages/OtherElement/element";
import Widgets from "./modules/Widgets/widgets";
import Forms from "./modules/Form/form";
import Tables from "./modules/Tables/tables";
import Charts from "./modules/Charts/charts";
import SignIn from "./pages/SignIn/signIn";
import SignUp from "./pages/SignUp/signUp";
import PageNotFound from "./pages/404";
import BlankPage from "./pages/BlankPage";

export default [
  {
    path: "/",
    component: <Navigate to="/dashboard" />,
  },
  {
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    path: "/button",
    component: <Buttons />,
  },
  {
    path: "/typography",
    component: <Typography />,
  },
  {
    path: "/element",
    component: <Element />,
  },
  {
    path: "/widgets",
    component: <Widgets />,
  },
  {
    path: "/forms",
    component: <Forms />,
  },
  {
    path: "/tables",
    component: <Tables />,
  },
  {
    path: "/charts",
    component: <Charts />,
  },
  {
    path: "/signin",
    component: <SignIn />,
  },
  {
    path: "/signup",
    component: <SignUp />,
  },
  {
    path: "/404",
    component: <PageNotFound />,
  },
  {
    path: "/blankpage",
    component: <BlankPage />,
  },
];
