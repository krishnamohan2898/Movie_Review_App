import { Button, TextField,Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import useForm from './Read'

const Searchmovi = () => {

    var [value,setvalues] = useForm({"moviename":""})
    var [datas,changedata] = useState([])
    const readdata=()=>{
        console.log(value)

        axios.post("http://localhost:8080/search",value).then(
        (response)=>{
            console.log(response.data)

        changedata(
            datas = response.data
        )

}    )
        
    }

   

    
    return (
        <div>

        <Typography variant="h5" color="primary" style={{fontFamily:"sans-serif"}} align="center" >SEARCH FOR A MOVIE</Typography>

            <TextField 
            name="moviename"
            value={value.moviename}
            onChange={setvalues}
            variant="outlined"
            fullWidth
            
            
            margin="normal"
            />
            
            <Button
            onClick={readdata}
            fullWidth
            variant="contained"
            color="primary"
            >Search</Button>


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
                    {datas.map((value,index)=>{
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

export default Searchmovi
