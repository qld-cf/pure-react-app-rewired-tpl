import React from "react"
import { Route, Redirect } from "react-router-dom"
import '@css/index.normal.less';
import routes from "@route/routerConfig";

// 返回路由
const RouteItem = (props: { key: any; redirect: any; path: any; component: any }) => {
  const { redirect, path, component, key } = props
  if (redirect) {
    return <Redirect exact key={key} from={path} to={redirect} />
  }
  return <Route key={key} component={component} path={path} />
}

// 获取子路由
const loopRoute = (route: any, i: number, _path?: string) => {
  return route.children.map((routeChild: { path?: any; children?: any; redirect?: any; component?: any }, idx: number) => {
    const rPath = route.path + routeChild.path
    const { redirect, component } = routeChild
    if (routeChild.children && routeChild.children.length) {
      // 递归获取子路径
      return loopRoute(routeChild, idx, rPath)
    } else {
      const routePath = _path ? _path + routeChild.path : route.path + routeChild.path
      return RouteItem({
        key: `${i}-${idx}`,
        redirect,
        path: routePath,
        component
      })
    }
  })
}

const Routes = routes.map((route: any, key) => {
  return Array.isArray(route.children) && route.children.length
    ? loopRoute(route, key)
    : RouteItem({ key, ...route })
})

export default Routes