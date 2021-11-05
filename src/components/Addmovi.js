import { Button, TextField,Typography } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import useForm from './Read'

const Addmovi = () => {

    var [value,setvalue] = useForm({moviename:"",actor:"",actress:"",director:"",releaseyear:"",camera:"",producer:"",language:""})



    const readvalues=()=>{
        console.log(value)
        axios.post("http://localhost:8080/add",value).then(
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
            <TextField value={value.actress}  onChange={setvalue} fullWidth variant="outlined" margin="normal" label="actress" name="actress"/>
            <TextField value={value.director} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="director" name="director"/>
            <TextField value={value.releaseyear} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="releaseyear" name="releaseyear"/>
            <TextField value={value.camera} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="camera" name="camera"/>
            <TextField value={value.producer} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="producer" name="producer"/>
            <TextField value={value.language} onChange={setvalue} fullWidth variant="outlined" margin="normal" label="language" name="language"/>
            
            
            

             <Button onClick={readvalues} fullWidth variant="contained" color="primary">Submit</Button>

        </div>
    )
}

export default Addmovi
