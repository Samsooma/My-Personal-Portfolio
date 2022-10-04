import React, { Component } from 'react';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './App.css';
import ProductPage from './posts/ProductPage';
import MULTIPage from './posts/MULTIPage';
import HackBeanpotPage from './posts/HackBeanpotPage';
import Card from '@mui/material/Card';
import YoutubeLogo from './images/YoutubeLogo.svg';
import WebsiteLogo from './images/Website.svg';
import HackathonLogo from './images/HackathonLogo.svg'
import TechLogo from './images/TechLogo.svg'
import {Link} from "react-router-dom";

class ContentCards extends Component {
  render() {
    return (
        <div style={{display:"flex" , alignItems:"center", justifyContent: "center", paddingBottom:60}}>
          <Grid container spacing={10} xs={10} md={9} lg={9.5} direction="row" alignItems="center" justifyContent="center"  sx={{paddingTop:10}}>
            <Grid item xs={12} md={6} lg={4.5}>
            <Link to={'/product'} className="nav-link" style={{ textDecoration: 'none'}}> 
              <Card sx={{ backgroundColor: "#6C4679", opacity:0.8, borderRadius: 10}}>
                  <Grid item>
                    <img className="youtubeLogo" src={YoutubeLogo}></img>
                  </Grid>
                  <Grid item>
                    <CardContent>
                      <Typography variant="h5" sx={{fontWeight:'bold', fontFamily: `"Montserrat", sans-serif`,  color:'white'}}> 
                        Youtube Analysis
                      </Typography>
                    </CardContent>
                  </Grid>
                </Card>
                </Link>
            </Grid>
            <Grid item xs={12} md={6} lg={4.5}>
            <a href="https://github.com/Samsooma/My-Personal-Portfolio" style={{ textDecoration: 'none'}}>
              <Card sx={{ backgroundColor: "#262B9A", opacity:0.8, borderRadius: 10}}>
                  <Grid item>
                    <img className="websiteLogo" src={WebsiteLogo}></img>
                  </Grid>
                  <Grid item>
                    <CardContent>
                      <Typography variant="h5" sx={{fontWeight:'bold', fontFamily: `"Montserrat", sans-serif`, color:'white'}}> 
                        This website!
                      </Typography>
                    </CardContent>
                  </Grid>
              </Card>
              </a>
            </Grid>
            <Grid item xs={12} md={6} lg={4.5}>
            <Link to={'/hbp'} className="nav-link" style={{ textDecoration: 'none'}}>
              <Card sx={{ backgroundColor: "#1E3F57", opacity:0.8, borderRadius: 10}}>
                  <Grid item>
                    <img className="hackathonLogo" src={HackathonLogo}></img>
                  </Grid>
                  <Grid item>
                    <CardContent>
                      <Typography variant="h5" sx={{fontWeight:'bold', fontFamily: `"Montserrat", sans-serif`, color:'white'}}> 
                        Humans of HackBeanpot
                      </Typography>
                    </CardContent>
                  </Grid>
              </Card>
              </Link>
            </Grid>
            <Grid item xs={12} md={6} lg={4.5}>
            <Link to={'/multi'} className="nav-link" style={{ textDecoration: 'none'}}>
              <Card sx={{ backgroundColor: "#1E3F57", opacity:0.8, borderRadius: 10}}>
                  <Grid item>
                    <img className="techLogo" src={TechLogo}></img>
                  </Grid>
                  <Grid item>
                    <CardContent>
                      <Typography variant="h5" sx={{fontWeight:'bold', fontFamily: `"Montserrat", sans-serif`,  color:'white'}}> 
                         MULTI
                      </Typography>
                    </CardContent>
                  </Grid>
              </Card>
              </Link>
            </Grid>
          </Grid>
        </div>
    );
  }
}

export default ContentCards;