import React from "react"
const Login = React.lazy(() => import("@views/User/login"))
const Home = React.lazy(() => import("@views/Home"))
const Promotion = React.lazy(() => import("@views/Promotion"))

const routes = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    children: [
      {
        path: "/",
        component: Home,
      },
    ],
  },
  {
    path: "/promotion",
    children: [
      {
        path: "/",
        component: Promotion,
      },
    ],
  },
]
export default routes
