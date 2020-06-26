import React, { useState } from 'react'
import { Container } from 'react-bootstrap';

const Hero = () => {

    const [show, setShow] = useState(false);

    return (
        <section id="hero">
            <div className="inner">
                <h1>jake peacock</h1>
                <br />
                <ul className="actions">
                    <li><a onClick={() => setShow(true)} className="button scrolly">SAY HI</a></li>
                </ul>
            </div>
        </section>
    )

}

export default Hero
