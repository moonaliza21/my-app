
import { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
// import { BrowserRouter, Routes,Route } from 'react-router-dom';

// Routing 







function App() {
  // =========================================================
  // functions
  // =====================================================
  const[mode,setMode]=useState("light")//wether dark mode is enable or not
 const[alert,setAlert]=useState(null)
 const showalert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 3000);

 }
  const toggleMode=()=>{
    if(mode==="dark"){
      setMode("light")
      document.body.style.backgroundColor="white";
      showalert("lihgt  mode is enable","")
      document.title="Home-light mode is enable"
      
      
      
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor="grey";
      showalert("dark mode is enable","success")
      document.title="Home-dark mode is enable"
    }
  }
  
  return (
  <>

  {/* Navbar  */}
  {/* ================================= */}
   

 {/* <Navbar name="Utilist" about ="AboutUs" mode={mode} toggleMode={toggleMode}/> */}
{/* <Navbar mode={mode} toggleMode={toggleMode}/> */} 


{/* ============================================== */}
{/* alert  */}


<Alert alert={alert}/>


{/* ================================== */}


{/* text form    */}


<div className="container my-3">


{/* <TextForm heading="Enter Some about what you anaylze about our company" mode={mode} showalert={showalert}></TextForm> */}



                    
 {/* about  */}

{/* <About></About> */}

{/* <BrowserRouter> */}
<Navbar name="Utilist" about ="AboutUs" mode={mode} toggleMode={toggleMode}/>
<TextForm heading="Enter Some about what you anaylze about our company" mode={mode} showalert={showalert}></TextForm>
  {/* <Routes> */}
  {/* <Route path="/" element={  <About></About> } >

</Route>
    
    <Route path="/about" element={ */}
        {/* // <TextForm heading="Enter Some about what you anaylze about our company" mode={mode} showalert={showalert}></TextForm>
        }> */}

    {/* </Route>
  </Routes>
</BrowserRouter> */}







</div>




  </>
  );
}

export default App;
