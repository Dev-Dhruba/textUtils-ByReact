import { useState } from 'react';
import './App.css';
// import Accordian from './components/Accordian';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { type } from '@testing-library/user-event/dist/type';


function App() {
  
  const [mode, setMode] = useState('light');
  const [lableText, setLableText] = useState("Enable dark mode");
  // const [lableTextColor, setLableTextColor] = useState("light")
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
 
  const toggleMode = () => {
    if(mode === 'light'){
      setMode("dark");
      setLableText("Enable light mode");
      // setLableTextColor("light");
      document.body.style.backgroundColor = "#0a0870";
      showAlert("Dark mode enabled", "success");
    }
     
    else{
      setMode("light");
      setLableText("Enable dark mode");
      // setLableTextColor("dark");
      document.body.style.backgroundColor = "white";
      showAlert(" mode enabled", "success");
    }

  }
  return (
    <>
      <Navbar title = "TextUtils By Props" aboutText='About us' search='search ' home='Home' mode={mode} toggleMode={toggleMode} lableText={lableText}  ></Navbar>

      <Alert alert= {alert} />

      <div className="container">
          <TextForm heading = 'Enter the text to analyse below' mode={mode} showAlert={showAlert}  />
          {/* <Accordian/> */}
      </div>
    </>
  );
}

export default App;

