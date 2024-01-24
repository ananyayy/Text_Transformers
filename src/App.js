import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Textspace from './components/Textspace';
import { useState } from 'react';
import Alert from './components/Alerts';


function App() {
  const [mode, setMode] = useState('light');
  const [msg, setMsg] = useState('');
  const [alert, setAlert]  = useState('');

  const showAlert = (message,type) =>
  {
    setAlert({
      msg:message,
      type:type
    })
    
  }
  
  const changemode = () =>{
    if(mode==='light'){
     setMode('dark') ;
     document.body.style.backgroundColor = 'black';
     showAlert('Dark mode enabled!',"success");

    }
    else{
      setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert('Light mode enabled!',"success");

    }

  }
 
  return (
<>
     <Navbar title="TextTransformers" mode={mode} changemode={changemode}/>
     <Alert alert={alert}/>
     <div className="container my-5">
     <Textspace heading="Enter text in the box" mode={mode} showAlert={showAlert}/>
    </div>
    </>
  );
}

export default App;
