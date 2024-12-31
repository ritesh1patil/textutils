import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]= useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
  }
 setTimeout(() => {
    setAlert(null);
 }, 5000);

  const toggleMode=()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled", "success");
      document.title="TextUtils-Dark Mode Enabled"
      // setInterval(() => {
      //   document.title='Install Textutils Now';
      // }, 2000);
      // setInterval(() => {
      //   document.title='TextUtils Is Amazing'
      // }, 3000);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled", "success");
      document.title="TextUtils-Light Mode Enabled"
      // setInterval(() => {
      //   document.title='Install Textutils Now';
      // }, 2000);
      // setInterval(() => {
      //   document.title='TextUtils Is Amazing'
      // }, 3000);

    }
    
  }
  return (
    <> 
  <Navbar  title="Textutils"  mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3" ></div>
  <TextForm showAlert={showAlert} heading= 'Enter the Text here to Analyze' mode={mode} />
  <About/>
    </>
    
  );
}

export default App;
