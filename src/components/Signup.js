import React, { useState } from "react"
import Modal from 'react-bootstrap/Modal';

const SignupModal = (show, setShow) => {

  return (
    <modal show={show} onHide={() => setShow(false)}>
      Hello World!
    </modal>
  )
}

const Signup =  () => {

  const [show, setShow] = useState(false)
  console.log(show)

  return (
    <section id="four" className="main style1 special">
      {/*<SignupModal show={false} setShow={setShow} centered/>*/}
      <div className="container">
        <header className="major">
          <h2>keep in touch</h2>
        </header>
        <p>PROJECT UPDATES, EVENT ANNOUNCEMENTS, PARTNERSHIPS</p>
        <ul className="actions uniform">
          <li><a onClick={() => setShow(true)} className="button special">SIGN UP</a></li>
          {/*<li><a href="#" className="button">tell me more</a></li>*/}
        </ul>
      </div>
    </section>
  )

}

export default Signup