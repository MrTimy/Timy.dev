import { useState } from "react";
import "./Header.css"
import logo from "../assets/logo.png"

export default function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
      <div className="nav">
      <nav className="navigation-menu">
        <div className="image">
        <a href="/" className="brand-name">
        <img src={logo} alt="logo" />
        </a>
        </div>
        <button className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
    } >
          <ul>
            <li className="home">
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
  }