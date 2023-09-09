import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TextForm from "./Components/TextForm";
import React, {useState} from 'react';
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggelMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#22335f';
      document.body.style.color = 'white';
      showAlert("Dark mode is on !","success");
      // document.title = 'Textutil : Dark Mode is on !';
      // setInterval(() => {
      //   document.title = 'Textutils is Amazing !';
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'TextUtils : Install Now !';
      // }, 3000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode is on !", "success");
      // document.title = 'Textutil : Light Mode is on !';
    }
  }
  
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText={"About"} mode={mode} toggelMode={toggelMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm showAlert = {showAlert} heading="Try TexUtils - Word counter, Character counter, Remove extra spaces" mode={mode} toggelMode={toggelMode}/>}/>
        <Route exact path="/about" element={<About mode={mode} />}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
