import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import playmaker from '../assets/images/playmaker.png'
import goodapple from '../assets/images/goodappletemp.png'
import chessviz from '../assets/images/chessviztemp.png'
import SEO from '../components/seo';
import About from '../components/About';
import Hero from '../components/Hero';
import Signup from '../components/Signup';
import Mission from '../components/Mission';
import Interests from '../components/Interests';
import Header from '../components/Header';

const goodappleUrl = "https://goodapplefoods.com"
const playmakerUrl = "https://playmaker.social"


class Homepage extends React.Component {
    render() {
        return (
            <Layout>
                <SEO/>
                <Header include="*"/>
                {/*Hero*/}
                <Hero/>

                <About/>

                <Mission/>

                {/*PROJECTS*/}
                <section id="projects" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>projects / partnerships</h2>
                            </header>
                            <p>DIGITAL EXPERIENCES & SERVICES IN SMALL BUSINESS</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={goodapple} alt="" /></span>
                            <h3>GOOD APPLE FOODS</h3>
                            <p>developed tools for austin local produce delivery service</p>
                            <ul className="actions">
                                <li><a href={goodappleUrl} className="button">Shop</a></li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <span className="image fit" ><img src={playmaker} alt="" /></span>
                            <h3>PLAYMAKER</h3>
                            <p>created platform for remotely listening to music with friends</p>
                            <ul className="actions">
                                <li><a href={playmakerUrl} className="button">Listen</a></li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={chessviz} alt="" /></span>
                            <h3>CHESSVIZ</h3>
                            <p>designed a minimal chess player with attack control visualizations</p>
                            <ul className="actions">
                                <li><a href="#" className="button">Play</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <Interests/>

                <Signup/>

            </Layout>
        );
    }
}

export default Homepage;