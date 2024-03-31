import { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setbtnmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setbtnmode("dark");
      document.body.style.backgroundColor = "black";
      showalert("Dark Mode has been Enable", "success");
    } else {
      setbtnmode("light");
      document.body.style.backgroundColor = "white";

      showalert("Dark Mode has been Disable", "success");
    }
  };
  return (
  <>  
{/*      
          <Navbar title="Text-Utils" mode={mode} togglemode={togglemode} />
          <Alert alert={alert} />

     
          
            <Textform mode={mode} showalert={showalert} />
          
       */}
  
 
  
    <Router>
    <Navbar title="Text-Utils" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
          <Route
            exact path="/"
            element={
              <Textform
              showalert={showalert}
                heading="Enter Text to analyze "
                mode={mode}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  </>
 
 
 
    );
}

export default App;
