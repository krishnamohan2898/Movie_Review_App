import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" align="center">Movie App</Typography>

                    <Link color="secondary" to="/">Search Movie</Link>
                    <Link color="secondary" to="/displayall">Display All</Link>                     
                     <Link color="secondary" to="/add">Add a Movie</Link>
           
                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Header
