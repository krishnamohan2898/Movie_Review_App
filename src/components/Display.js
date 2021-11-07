import { Button,Table, TableBody, TableCell, TableHead, TableRow,Typography} from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'

const Display = () => {
    
    var [value,setvalue] = useState([])

    const display=()=>{
        
        axios.get("http://3.143.175.100:5001/view").then(
            (response)=>{
                console.log(response.data)

                setvalue(
                    value = response.data
            )
            }

            
       
        )
    }

    
    
    return (
        <div>
            <Typography variant="h5" color="primary" style={{fontFamily:"sans-serif"}}align="center">DISPLAY ALL MOVIES</Typography>
            <Typography><br></br></Typography>
            <Button onClick={display} fullWidth variant="contained" color="primary">Display All</Button>
            


            <Table>
                <TableHead>
                    <TableRow >
                        
                        <TableCell >movie name</TableCell>
                        <TableCell>actor</TableCell>                     
                        <TableCell>director</TableCell>
                        <TableCell>review</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {value.map((value,index)=>{
                        return <TableRow>
                            
                        <TableCell>{value.moviename}</TableCell>                     
                        <TableCell>{value.actor}</TableCell>
                        <TableCell>{value.director}</TableCell>                 
                        <TableCell>{value.review}</TableCell>
                   
                        
                            
                        </TableRow>

                    })}
                    
                </TableBody>
            </Table>

        </div>
    )
}

export default Display
