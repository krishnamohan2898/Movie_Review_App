import { Container, Grid, Typography } from "@material-ui/core";
import Addmovi from "./components/Addmovi";
import Deletemovi from "./components/Deletemovi";

import Display from "./components/Display";
import Searchtodo from "./components/Searchmovi";






function App() {
  return (
    <div >
      <Typography variant="h2" style={{padding:10,fontFamily:"fantasy",color:"blueviolet"}} align="center">MOVIE APP</Typography>
      <Grid container style={{padding:10}}> 
     
       <Grid item xs={12} sm={7} md={7} style = {{padding:10}}> <Display /></Grid>
        <Grid item xs={12} sm={5} md={5} style = {{padding:10}}> <Searchtodo/></Grid>
       <Grid item xs={12} sm={7} md={7} style = {{padding:10}}><Addmovi/> </Grid>

       

      </Grid> 

     

    </div>
  );
}

export default App;
