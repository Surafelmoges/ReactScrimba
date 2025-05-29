import { createRoot } from "react-dom/client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap/dist/css/bootstrap.min.css';



const containor = createRoot(document.getElementById("root"))

function Mynavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo + Brand */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="logo.jpg"
            alt="Logo"
            width="30"
            height="30"
            borderRadius= "20%"
            className="d-inline-block align-text-top me-2"
          />
          AddisElectronics
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function MainContent() {
  return (
    <main>
      
      <div className="card mission-value-card mx-auto my-5 p-4" style={{ maxWidth: '800px', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-center mb-4">Addis Electronics</h2>

        <div className="mb-4">
          <img
        src="ll.jpg"
        alt="Addis Electronics Logo"
        style={{ width: '150px', height: 'auto', marginBottom: '20px',borderRadius: '50%' }}
      />
      
          <div className="h5 text-primary fw-bold mb-2">Our Mission</div>
          <p>
            To provide innovative, affordable, and high-quality electronic products that enhance everyday life in Ethiopia and beyond. We aim to be a trusted brand in every household by delivering reliable technology and exceptional customer service.
          </p>
        </div>

        <div>
          <div className="h5 text-primary fw-bold mb-2">Our Values</div>
          <ul>
            <li><strong>Integrity:</strong> We operate with honesty and transparency.</li>
            <li><strong>Innovation:</strong> We embrace new ideas and technologies.</li>
            <li><strong>Customer Focus:</strong> We prioritize customer satisfaction.</li>
            <li><strong>Quality:</strong> We never compromise on product excellence.</li>
          </ul>
        </div>
      </div>
    </main>
  )
}


function Appd(){
  return (
    <div>
      <Mynavbar />
      <MainContent />
    </div>
  )
}

containor.render(<Appd />)