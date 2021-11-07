import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" align="center">Movie Review App</Typography>

                    <Link color="secondary" style={{padding:5,fontSize:25,margin:15,color:'Black'}} to="/">Search Movie</Link>
                    <Link color="secondary" style={{padding:5,fontSize:25,margin:15,color:'Black'}} to="/displayall">Display Movies</Link>                     
                     <Link color="secondary" style={{padding:5,fontSize:25,margin:15,color:'Black'}} to="/add">Add a Review</Link>
           
                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Header
