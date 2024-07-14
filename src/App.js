import { useState } from 'react';
import './App.css';
import Accordian from './components/Accordian';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import Style from './components/Style';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const [lableText, ] = useState("Enable dark mode");
  // const [lableTextColor, setLableTextColor] = useState("light")
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState({backgroundColor: '#f8f9fa', color: 'black'});
  const [textAreaStyle, setTextAreStyle] = useState({backgroundColor: 'white', color: 'black'})
  const [buttonStyle, setButtonStyle] = useState({backgroundColor: 'white', color: 'black', border:'none'})

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type : type
    })

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  const styleOne = () => {

      document.title = "TextUtils-Blue mode"

      setMode({
        backgroundColor: '#3282b8',
        color: '#1b262c'
      })

      document.body.style.backgroundColor = '#1b262c';

      setTextAreStyle({
        backgroundColor: '#1b262c',
        color: '#bbe1fa'
      })

      setButtonStyle({
        backgroundColor: '#1b262c',
        color: '#bbe1fa'
      })
  }

  const styleTwo = () => {
    setMode({
      backgroundColor: '#AD88C6',
      color: '#ffe6e6'
    })

    document.body.style.backgroundColor = '#7469B6';

    setTextAreStyle({
      backgroundColor: '#7469b6',
      color: '#feefad'
    })

    setButtonStyle({
      backgroundColor: '#7469b6',
      color: '#ffe6e6'
    })
}

const styleThree = () => {
  setMode({
    backgroundColor: '#f8f9fa',
    color: 'black'
  })

  document.body.style.backgroundColor = 'white';

  setTextAreStyle({
    backgroundColor: 'white',
    color: 'black'
  })

  setButtonStyle({
    backgroundColor: 'black',
    color: 'white'
  })
}

const styleFour = () => {
  setMode({
    backgroundColor: '#7e30e1',
    color: '#f3f8ff'
  })

  document.body.style.backgroundColor = '#49108b';

  setTextAreStyle({
    backgroundColor: '#49108b',
    color: '#f3f8ff'
  })

  setButtonStyle({
    backgroundColor: '#49108b',
    color: '#f3f8ff'
  })
}

const styleFive = () => {
  setMode({
    backgroundColor: '#c738bd',
    color: '#f8f9d7'
  })

  document.body.style.backgroundColor = '#850f8d';

  setTextAreStyle({
    backgroundColor: '#850F8D',
    color: '#f8f9d7'
  })

  setButtonStyle({
    backgroundColor: '#e49bff',
    color: '#f8f9d7'
  })
}

  return (
    <>
    <Router>
      <Navbar title = "TextUtils By Props" search='search 'home='Home' lableText={lableText} navStyle={mode} />

      <Style changeColor1={styleOne} changeColor2={styleTwo} changeColor3={styleThree} changeColor4={styleFour} changeColor5={styleFive} />

      <Alert alert= {alert} />

      <div className="container">
              <Routes>
                  <Route exact path="/about" element={<Accordian />}>
                  </Route>

                  <Route exact path="/"
                      element={<TextForm heading = 'Enter the text to analyse below' showAlert={showAlert} textFormStyle={mode} textAreaStyle={textAreaStyle} buttonStyle={buttonStyle} />} >
                 </Route>
                </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;

