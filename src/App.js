import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import React, {Fragment, Suspense, lazy } from 'react'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomeContainer from './components/elements/HomeContainer/HomeContainer'

import { GlobalStyle } from './style/global_style'

// import WebdesignSection from './components/elements/Webdesign-section/WebdesignSection'
// import DevSection from './components/elements/Dev-section/DevSection'
// import InfoSection from './components/elements/Info-section/InfoSection'
const DevSection = lazy(() => import('./components/elements/Dev-section/DevSection') )
const WebdesignSection = lazy(() => import('./components/elements/Webdesign-section/WebdesignSection'));
const InfoSection = lazy(() => import('./components/elements/Info-section/InfoSection') )

const App = () => {
  return (

    <div className='app-container'>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<HomeContainer />}/>
              <Route path='/home' element={<HomeContainer />}/>
              <Route path='/development' element={<DevSection />}/>
              <Route path='/webdesign' element={<WebdesignSection />}/>
              <Route path='/info' element={<InfoSection />}/>
              <Route path="*"  element={<Navigate to="/" />} />
            </Routes>
            </Suspense>
      </BrowserRouter>
        <Footer />
    </div>
  )
}

export default App
