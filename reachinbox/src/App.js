// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>REACHINBOX</h1>
      </header>
      <div className="login-container">
        <h2>Create a new account</h2>
        <button className="google-signup">Sign up with Google</button>
        <button className="email-signup">Create an Account</button>
        <p>Already have an account? <a href="/signin">Sign In</a></p>
      </div>
      <footer>© 2023 Reachinbox. All rights reserved.</footer>
    </div>
  );
}

export default App;
