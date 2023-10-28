import React, { memo } from 'react'
import { BrowserRouter, Routes as RouteList, Route } from 'react-router-dom'

import Index from './pages/Index'
import Notfound from './pages/Notfound'

const Routes: React.FC = memo(() => {
  return (
    <BrowserRouter>
      <RouteList>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Notfound />} />
      </RouteList>
    </BrowserRouter>
  )
})
Routes.displayName = 'Routes'

export default Routes
