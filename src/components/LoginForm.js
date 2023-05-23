import React, { useState } from "react";
import Boton from "./Boton";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "alex@gmail.com" && password.trim() === "1234") {
      setShowErrorAlert(false); 
      setShowSuccessAlert(true);
    } else {
      setShowSuccessAlert(false);
      setShowErrorAlert(true);
    }
  };

  const isFormValid = email.trim() === "" || password.trim() === "";

  return (
    <form onSubmit={handleSubmit} className="form-main">
      
      <div className="form-group">
        <label>Email</label>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Ingresa email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <br />
        <input
          type="password"
          className="form-control"
          placeholder="Ingresa password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <br></br>

      <div>
        <button type="submit" disabled={isFormValid}>
          Iniciar Sesión
        </button>
      </div>
      
      <br></br>

      {showErrorAlert && (
        <p className="alert-error">¡Los datos son incorrectos!</p>
      )}
      {showSuccessAlert && (
        <p className="alert-success">¡Inicio de sesión exitoso!</p>
      )}

    </form>
  );
};

export default LoginForm;


