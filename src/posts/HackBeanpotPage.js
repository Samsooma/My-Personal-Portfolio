import React, { Component, useState } from 'react';
import {useEffect} from 'react';

import './HackBeanpotPage.css';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';





function HackBeanpotPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <div>
        <div className="hackBeanpotContent"> 
          <h2>HackBeanpot</h2>
          <p>
            In addition to my software experience, I find ways to explore the intersectionality between humans and technology!
            <br/>
            <br/>
             The most notable recent example of this is being on the organizing team of one of Boston’s most influential Hackathons, HackBeanpot, from 2020-2022 where I worked on setting the overall vision, roadmap and overall execution of this annual event with over 300 applications and 24 members. The biggest challenge in this experience was the time constraint.
             Having to understand the deliverables, lead the team and carry out the tasks and then host the event in less than a year required seamless cross team collaboration, compromise and task prioritization. 
            <br/>
            <br/>
          </p>
          <h2>
          <Grid container justifyContent='center' spacing={2}>
          <Link href="https://hackbeanpot.medium.com/humans-of-hackbeanpot-sama-el-tahawy-179b56bf6d75">
            <Grid item sx={{padding:2}}>
              <Chip sx={{backgroundColor: '#1E3F57', opacity:0.8, color: 'white', borderRadius: 20, maxWidth:450, fontSize: 15, padding:2}} label="Humans of HackBeanpot: Sama El Tahawy"/>
            </Grid>
            </Link>
            <Link href="https://hackbeanpot.com/ ">
            <Grid item sx={{padding:2}}>
              <Chip sx={{backgroundColor: '#1E3F57', opacity:0.8, color: 'white', borderRadius: 20, maxWidth:350, fontSize: 15, padding:2}} label="Check out HackBeanpot!"/>
            </Grid>
            </Link>
          </Grid>
          </h2>
          </div>
        </div>
    );
}

export default HackBeanpotPage;