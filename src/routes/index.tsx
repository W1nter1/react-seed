import React, { Suspense, lazy, LazyExoticComponent } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import routers from './route'
import Loading from '@/components/Loading'

// 实现组件懒加载 可提升首屏加载速度
const SuspenseComponent = (Component: LazyExoticComponent<any>) => (
  props: any
) => (
  <Suspense fallback={<Loading />}>
    <Component {...props} />
  </Suspense>
);

const renderRouter = (routers: any) => {
  if (!Array.isArray(routers)) return null;
  return (
      <Switch>
        {routers.map((route: any, index: number) => {
          const { path = '', exact = true, strict = true, redirect = '', component = () => { } } = route
          if (redirect) {
            return (
              <Redirect
                key={path || index}
                exact={exact}
                strict={strict}
                from={path}
                to={redirect}
              />
            );
          }
          return (
            <Route
              key={path || index}
              exact={exact}
              strict={exact}
              path={path}
              component={SuspenseComponent(lazy(component))}
            />
          );
        })}
        <Redirect path="*" to="/"></Redirect>
      </Switch>
  );
};

const RouterConfig = () => {
  return <Router>{renderRouter(routers)}</Router>;
};
export default RouterConfig