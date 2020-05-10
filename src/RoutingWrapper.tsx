import React, { FC } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'

const RoutingWrapper: FC = ({ children }) => {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        {children}
      </QueryParamProvider>
    </Router>
  )
}

export default RoutingWrapper
