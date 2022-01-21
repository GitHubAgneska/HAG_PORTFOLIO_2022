import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/containers/Home'
import Header from './components/layout/Header'
import './App.css'
import { GlobalStyle } from './style/global_style'


const App = () => {
  return (

    <div className="App">
        <GlobalStyle />
        <Router>
          <Header />
          
          <Home />


        </Router>
    </div>
  );
}

export default App;
