import React from 'react'
import Layout from '../components/layout'
import Header from "../components/Header";

const NotFoundPage = () => (
  <Layout>
      <Header/>
      <section id="four04">
          <div className="inner">
              <h1>under construction</h1>
          </div>
      </section>
      <section id="signup" className="main style1 special">
          {/*<SignupModal show={false} setShow={setShow} centered/>*/}
          <div className="container">
              <h4>tbh, it's a 404</h4>
              <ul className="actions uniform">
                  <li><p><a className="button special" href="/">START OVER?</a></p></li>
                  {/*<li><a href="#" className="button">tell me more</a></li>*/}
              </ul>
          </div>
      </section>

      {/*<section id="main style1 special">*/}
      {/*    <div className="container">*/}
      {/*        <ul className="actions uniform">*/}
      {/*        <h3>TBH... 404</h3>*/}
      {/*        <p>start <a className="button special" href="/"> over?</a></p>*/}
      {/*        </ul>*/}
      {/*    </div>*/}
      {/*</section>*/}
  </Layout>
)

export default NotFoundPage
