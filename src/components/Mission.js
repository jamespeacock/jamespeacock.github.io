import React  from "react"
import Modal from 'react-bootstrap/Modal';

const Mission =  () => {

  return (
    <section id="two" className="main style2">
      <div className="grid-wrapper">
        <div className="col-8">
          <ul className="major-icons">
            <li><span className="icon style1 major fa-code" style={{borderColor: "#222222"}}></span></li>
            <li><span className="icon style1 major fa-camera-retro"  style={{borderColor: "#222222"}}></span></li>
            <li><span className="icon style1 major fa-bolt"  style={{borderColor: "#222222"}}></span></li>

            <li><span className="icon style2 major fa-desktop"  style={{borderColor: "#dddddd"}}></span></li>
            <li><span className="icon style2 major fa-cog"  style={{borderColor: "#dddddd"}}></span></li>
            <li><span className="icon style2 major fa-mobile"  style={{borderColor: "#dddddd"}}></span></li>

          </ul>
        </div>
        <div className="col-4" style={{textAlign: 'right'}}>
          <header className="major" >
            <h2>values</h2>
          </header>
          <h3 style={{paddingTop: '20%'}}>DO THE RIGHT THING</h3>
          <h3>THINK GLOBAL, ACT LOCAL</h3>
          <h3>PARTICIPATORY DESIGN</h3>
          <h3>LESS IS MORE</h3>
        </div>
      </div>
    </section>
  )

}

export default Mission