import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Routes} from 'react-router-dom';
import './App.css';
import SamaPicture from './images/SamaElTahawyimg.png';
import YoutubeLogo from './images/YoutubeLogo.svg';
import WebsiteLogo from './images/Website.svg';
import HackathonLogo from './images/HackathonLogo.svg'
import TechLogo from './images/TechLogo.svg'
import JavaImage from './images/JavaImage.svg'
import PythonImage from './images/PythonImage.svg'
import SQLImage from './images/SQLImage.svg'
import CSharpImage from './images/CSharpImage.svg'
import FigmaImage from './images/FigmaImage.svg'
import AndroidImage from './images/AndroidImage.svg'

import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ProductPage from './posts/ProductPage';
import MULTIPage from './posts/MULTIPage';
import HackBeanpotPage from './posts/HackBeanpotPage';
import Bio from './Bio';
import ContentCards from './ContentCards';
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
