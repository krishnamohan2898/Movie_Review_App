import { Button, TextField,Typography } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import useForm from './Read'

const Addmovi = () => {

    var [value,setvalue] = useForm({moviename:"",actor:"",director:"",review:""})



    const readvalues=()=>{
        console.log(value)
        axios.post("http://3.143.175.100:5001/add",value).then(
            (response)=>{
            alert("successfully added")
            }
        )
    }

    
    return (
        <div>
            <br></br>
        <Typography variant="h4" color="primary" style={{fontFamily:"sans-serif",padding:10}} >INSERT A MOVIE</Typography>

            <TextField value={value.moviename} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="Movie" name="moviename" />
            <TextField value={value.actor} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="Actor" name="actor"/>           
            <TextField value={value.director} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="Director" name="director"/>           
            <TextField value={value.review} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="Review" name="review"/>
            
            
             <Button onClick={readvalues} fullWidth variant="contained" color="primary">Submit</Button>

        </div>
    )
}

export default Addmovi
