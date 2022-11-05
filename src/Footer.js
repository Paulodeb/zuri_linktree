import React from 'react'
import './App.css';
import zuri from "./zuri.svg";
import i4g from "./i4g.svg";

export default function Footer() {
  return (
    <div>
        <footer className="footer">
        <img id="slack" src={zuri} alt="pic" />
        <p id="hng">HNG Internship 9 Frontend Task</p>
        <img id="slack" src={i4g} alt="pic" />
      </footer>
    </div>
  )
}
