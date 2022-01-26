import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/containers/Home'
import DevSection from './components/elements/Dev-section/DevSection'
import WebdesignSection from './components/elements/Webdesign-section/WebdesignSection'
import InfoSection from './components/elements/Info-section/InfoSection'
import Header from './components/layout/Header'

import { GlobalStyle } from './style/global_style'
import Footer from './components/layout/Footer'
  
const App = () => {
  return (

    <div className='App'>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/development' element={<DevSection />}/>
            <Route path='/webdesign' element={<WebdesignSection />}/>
            <Route path='/info' element={<InfoSection />}/>
            <Route path="*"  element={<Navigate to="/" />} />
          </Routes>
      </BrowserRouter>
        <Footer />
    </div>
  )
}

export default App
