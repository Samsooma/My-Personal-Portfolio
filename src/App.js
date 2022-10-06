import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Routes} from 'react-router-dom';

import './App.css';

import ProductPage from './posts/ProductPage';
import MULTIPage from './posts/MULTIPage';
import HackBeanpotPage from './posts/HackBeanpotPage';
import HomePage from './HomePage';
import CreditPage from './CreditPage';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
        <header className="App-header">
          <h1>
            Sama El Tahawy
          </h1>
        </header>
        <div>
          <Routes>
              <Route path='/' element={<HomePage/  >} exact/>
              <Route path='/product' element={<ProductPage/  >} exact/>
              <Route path='/hbp' element={<HackBeanpotPage/ >} />
              <Route path='/multi' element={<MULTIPage/ >} />
              <Route path='/credits' element={<CreditPage/>}/>
          </Routes>
        </div>
        </Router>
      </div>
    );
  }

}
export default App;
