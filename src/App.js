import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/containers/Home'
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
          <Route exact path='/' component={Home} />
          <Route path='/development' component={Home} />
          <Route path='/webdesign' component={Home} />
          <Route path='/info' component={Home} />
        </Routes>
        <Home />

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
