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
        <Typography variant="h4" color="primary" style={{fontFamily:"sans-serif",padding:10}} >INSERT A MOVIE</Typography>

            <TextField value={value.moviename} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="movie" name="moviename" />
            <TextField value={value.actor} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="actor" name="actor"/>           
            <TextField value={value.director} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="director" name="director"/>           
            <TextField value={value.review} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="language" name="language"/>
            
            
             <Button onClick={readvalues} fullWidth variant="contained" color="primary">Submit</Button>

        </div>
    )
}

export default Addmovi
