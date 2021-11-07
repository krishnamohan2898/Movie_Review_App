import { Button, TextField,Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useState } from 'react'
import useForm from './Read'

const Searchmovi = () => {

    var [value,setvalues] = useForm({"moviename":""})
    var [datas,changedata] = useState([])
    const readdata=()=>{
        console.log(value)

        axios.post("http://3.143.175.100:5001/search",value).then(
        (response)=>{
            console.log(response.data)

        changedata(
            datas = response.data
        )

}    )
        
    }
    const deleteoperation=(id)=>{
        console.log(id)
        let data = {_id:id}
        axios.post("http://3.143.175.100:5001/delete",data).then(
            (response)=>{
                console.log(response.data)
                alert(response.data.status)
                readdata()
            }
            
        )
    }
   

    
    return (
        <div>
            <br></br>
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
                        
                        <TableCell >Movie Name</TableCell>
                        <TableCell>Actor</TableCell>                     
                        
                        <TableCell>Director</TableCell>
                        <TableCell>Review</TableCell>

                       

                        
                    </TableRow>
                </TableHead>

                <TableBody>
                    {datas.map((value,index)=>{
                        return <TableRow>
                            
                        <TableCell>{value.moviename}</TableCell>                     
                        <TableCell>{value.actor}</TableCell>
                        
                        <TableCell>{value.director}</TableCell>
                       
                        <TableCell>{value.review}</TableCell>
                        <TableCell><Button color="primary" variant="contained" onClick={()=>{deleteoperation(value._id)}}>delete</Button></TableCell>

                            
                            
                        </TableRow>
                    })}
                    
                </TableBody>
            </Table>

        </div>
    )
}

export default Searchmovi
