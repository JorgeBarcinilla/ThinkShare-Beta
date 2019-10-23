import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import AccoountCircle from '@material-ui/icons/AccountCircle';
import Autocomplete from '../autocomplete';
import './style.css';

function Page(props) {
    return (
        <AppBar position="static">

            <Toolbar className="appnav">
                <Grid container direction="row" justify="center" alignItems="center"  spacing={8}>
                    <Grid item sm="auto">
                        <Typography variant="h6" color="inherit">
                            ThinkShare
                        </Typography>
                    </Grid>
                        <Autocomplete />
                    <Grid item sm="auto">
                        <Link className="link" variant="body2" color="inherit">
                            Posts
                            </Link>
                    </Grid>
                    <Grid item sm="auto">
                        <Link className="link" variant="body2" color="inherit" >
                            Profile
                            </Link>
                    </Grid>
                    <AccoountCircle />
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Page;