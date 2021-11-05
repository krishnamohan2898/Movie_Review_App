import { Button,Table, TableBody, TableCell, TableHead, TableRow,Typography} from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'

const Display = () => {
    
    var [value,setvalue] = useState([])

    const display=()=>{
        
        axios.get("http://localhost:8080/displayall").then(
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
                        <TableCell>actress</TableCell>
                        <TableCell>director</TableCell>
                        <TableCell>Release year</TableCell>
                        <TableCell>camera</TableCell>                      
                        <TableCell>producer</TableCell>
                        <TableCell>language</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {value.map((value,index)=>{
                        return <TableRow>
                            
                        <TableCell>{value.moviename}</TableCell>                     
                        <TableCell>{value.actor}</TableCell>
                        <TableCell>{value.actress}</TableCell>
                        <TableCell>{value.director}</TableCell>
                        <TableCell>{value.releaseyear}</TableCell>       
                        <TableCell>{value.camera}</TableCell>              
                        <TableCell>{value.producer}</TableCell>
                        <TableCell>{value.language}</TableCell>
                        
                            
                        </TableRow>

                    })}
                    
                </TableBody>
            </Table>

        </div>
    )
}

export default Display
