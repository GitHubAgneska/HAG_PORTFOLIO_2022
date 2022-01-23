import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/containers/Home'
import WebdesignSection from './components/elements/Webdesign-section/WebdesignSection'
import Header from './components/layout/Header'
import './App.css'
import { GlobalStyle } from './style/global_style'
import Footer from './components/layout/Footer'

const App = () => {
  return (

    <div className='App'>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/development' element={<Home />}/>
            <Route path='/webdesign' element={<WebdesignSection />}/>
            <Route path='/info' element={<WebdesignSection />}/>
            <Route path="*"  element={<Navigate to="/" />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
