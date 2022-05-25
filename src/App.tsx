import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import '@css/index.normal.less'
import Main from '@layout/Main/'
import Loading from '@components/Loading'
import Routes from '@utils/getRoutes'
import Login from "@views/User/login"

let Entry = (props: any) => {
  return (
    <Main>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path='/login' component={Login} />
          <Redirect exact from='/' to='/home' />
          {Routes}
        </Switch>
      </Suspense>
    </Main>
  )
}

export default Entry
