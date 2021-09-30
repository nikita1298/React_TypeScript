import Home from "../pages/Home";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";
import Message from "../pages/Message";

export const publicRoutes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/Error",
    component: ErrorPage
  }
];

export const privateRoutes = [
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "/message",
    component: Message
  }

];
