import React, { Component } from 'react';
import './App.css';

import Chip from '@mui/material/Chip';
import JavaImage from './images/JavaImage.svg'
import PythonImage from './images/PythonImage.svg'
import SQLImage from './images/SQLImage.svg'
import CSharpImage from './images/CSharpImage.svg'
import FigmaImage from './images/FigmaImage.svg'
import AndroidImage from './images/AndroidImage.svg'
import Grid from '@mui/material/Grid';
import SamaPicture from './images/SamaElTahawyimg.png';



class Bio extends Component {
  render() {
    return (
        <div className='bio'>
          <Grid container sx={{
            justifyContent: 'center',
            paddingBottom:5}} spacing={1}>
            <Grid item xs="auto">
              <Chip sx={{backgroundColor:'#6C4679' , color: "white", fontSize:"25px" , fontFamily: `"Montserrat", sans-serif`, opacity:0.8, width:320}} label="Product Manager"/>
            </Grid>
            <Grid item xs="auto">
              <Chip sx={{backgroundColor:'#262B9A' , color: "white", fontSize:"25px" , fontFamily: `"Montserrat", sans-serif` , opacity:0.8, width:320}} label="Software Engineer"/>
            </Grid>
            <Grid item xs="auto">
              <Chip sx={{backgroundColor:'#1E3F57' , color: "white", fontSize:"25px" , fontFamily: `"Montserrat", sans-serif`, opacity:0.8, width:320}} label="Leader" />
            </Grid>
          </Grid>
          <div className='bioCard'>
            <Grid container>
              <Grid item xs="12" md="6" lg="4">
                  <img className="bioImage"  src={SamaPicture}></img>
              </Grid>
                  <Grid item xs="12" md="6" lg="8" sx={{textAlign:'left'}}>
                    <br/>
                    <br/>
                    <ul className='listBio'>
                      <li className='bioText'> <b>Computer Science and Cognitive Psychology</b> graduate with experience in carrying out successful long term projects</li>
                      <br/>
                      <li className='bioText'> Perspective of a <b> software engineer and a leader </b> who wants to make the products I work on usable and accessible to all.</li>
                      <br/>
                      <li className='bioText'>In addition to my software experience, I find ways to <b> explore the intersectionality between humans and technology</b></li>
                      <br/>
                    </ul>
                    <div style={{display:"flex" , alignItems:"center", justifyContent: "center"}}>
                    <img className="javaImage"  src={JavaImage}></img>
                    <img className="pythonImage"  src={PythonImage}></img>
                    <img className="sqlImage"  src={SQLImage}></img>
                    <img className="csharpImage"  src={CSharpImage}></img>
                    <img className="figmaImage"  src={FigmaImage}></img>
                    <img className="androidImage"  src={AndroidImage}></img>
                  </div>
                  </Grid>
              </Grid>
          </div>
        </div>
    );
  }
}

export default Bio;