import { createElement } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const containor = createRoot(document.getElementById("root"))

function MyfirstReactComponet() {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">AddisElectronics</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
);
}
function Home(){
  return (
  
    <h1>Welcome to AddisElectronics</h1>
)
}


function PartTwo(){
  return (
    <div>
    <header>
      <img 
      src="ll.jpg"
      alt="React-logo"
      width="100"
      height="100" 
      />
      
    </header>
    <main>
      <h1>List Of Products</h1>
      <ol>
        <li>Phone</li>
        <li>Laptop</li>
        <li>Earpod</li>
        <li>TV</li>
      </ol>
    </main>
    <footer>
      <p>@ 20xx SurafelMoges2025 All Right Reserved</p>
    </footer>
    </div>
  )
}

function Apps(){
  return (
    <div>
      <MyfirstReactComponet />
      <Home />
      <PartTwo />
    </div>
    
  );
}

containor.render(<Apps />);