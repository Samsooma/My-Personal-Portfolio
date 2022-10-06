import React from 'react';

import Bio from './Bio';
import ContentCards from './ContentCards';
import {Link} from "react-router-dom";



function HomePage() {
    return (
        <div>
        <Bio/>
        <ContentCards/>
        <div className='homePageCredits'>
        <Link style={{ textDecoration: 'none', color: 'grey' }} to={'/credits'}> 
        Credits
        </Link>
        &emsp;&emsp;
        <a style={{ textDecoration: 'none', color: 'grey' }} href='https://www.linkedin.com/in/samaeltahawy/'> 
        LinkedIn
        </a>
        </div>
        </div>
    );
}

export default HomePage;