import { createElement } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css"; 

const containor = createRoot(document.getElementById("root"))

function Header() {
  return (
    <>
     <header className="headerr">
      <img 
      src="ll.jpg"
      alt="React-logo"
      className="logo"
      
      />
      
    
    <nav className="navbar">
      <ul className="nav-list">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    </header>
    </>
   
 
);
}
function Main(){
  return (
    <>
    <h1>Welcome to AddisElectronics</h1>
    <div>
    
  
      <h1>List Of Products</h1>
      <ol>
        <li>Phone</li>
        <li>Laptop</li>
        <li>Earpod</li>
        <li>TV</li>
      </ol>
      </div>
      </>
     
)
}


function Footer(){
  return (
    <footer>
      <p>@ 20xx SurafelMoges2025 All Right Reserved</p>
    </footer>
)}

function Apps(){
  return (
    <div>
      <Header />
      <Main/>
      <Footer />
      
    </div>
    
  );
}

containor.render(
<Apps />);