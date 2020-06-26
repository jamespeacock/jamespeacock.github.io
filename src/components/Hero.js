import React, { useState } from 'react'


const Hero = () => {

    const [show, setShow] = useState(false);
    console.log(show);

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
