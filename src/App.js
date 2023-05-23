import { useState } from "react";
import "./App.css";
import Input from "./components/LoginForm";
import Footer from './components/Footer';

function App() {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const validateForm = (e) => {
    e.preventDefault();
    if (name === "") {
      setError(true);
      return;
    }
    setError(false);
    setName("");
    setPassword("");
  };

  return (
    <>
      <Input
        formulario={validateForm}
        error={error}
        dataName={name}
        name={setName}
        dataPassword={password}
        password={setPassword}
      />
      <br></br>
      <Footer />
    </>
    
  );
}

export default App;
