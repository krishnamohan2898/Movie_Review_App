
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Addmovi from "./components/Addmovi";


import Display from "./components/Display";
import Header from "./components/Header";
import Searchmovi from "./components/Searchmovi";



function App() {
  return (
    <div >
      
      
    
     <Router>

     
     <Header />
     <Routes>

     <Route path="/" exact element={<Searchmovi />} />
      <Route path="/displayall" exact element={<Display />} />       
      <Route path="/add" exact element={<Addmovi />} /> 
      </Routes>
 
     </Router>

  

   

      
            

    </div>
  );
}

export default App;
