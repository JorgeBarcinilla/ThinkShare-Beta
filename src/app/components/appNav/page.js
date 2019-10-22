import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AccoountCircle from '@material-ui/icons/AccountCircle';
import Autocomplete from '../autocomplete';
import './style.css';

function Page(props){
    return(
        <AppBar position="static">
            <Toolbar className="appnav">
                <Typography variant="h6" color="inherit">
                    ThinkShare
                </Typography>
                <Autocomplete/>
                
                <Link className="link" variant="body2" color="inherit">
                    Posts
                </Link>
                <Link className="link" variant="body2" color="inherit" >
                    Profile
                </Link>
                <AccoountCircle/>
            </Toolbar>
        </AppBar>
    );
}

export default Page;