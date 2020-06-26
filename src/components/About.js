import prof from '../assets/images/prof.jpg';
import React from 'react';

const About = () => {

  const siteTitle = "Jake Peacock  - Digital Empowerment";

  const fbPicUrl = "https://www.facebook.com/photo.php?fbid=772269566117131&set=t.1439810050&type=3&theater";
  const mixCloudUrl = "https://www.mixcloud.com/tripnologic/";
  const vfaUrl = "https://ventureforamerica.org/"
  const spotUrl = "https://www.youtube.com/watch?v=VRm7oRCTkjE";

  return(
    <section id="one" className="main style1">
      <div className="grid-wrapper">
        <div className="col-6">
          <header className="major">
            <h2>meet jake</h2>
          </header>
          <p>
            This born and raised Houstonian studied computer science and neuroscience at Rice University. Jake pursues his interests in the human brain and in programming in the hopes of one day creating an artificially intelligent <a href={spotUrl}>pet dog</a> ( not really ).

            In his free time, Jake enjoys <a href={mixCloudUrl}>mixing music</a>, planning social events, painting and teaching.

            He greets each day optimistic and energetic - many say in a fashion similar to a <a href={fbPicUrl}>golden retriever</a></p>
          <br />
          <p>
            Jake's vision is to bring small business into the digital age. Not just with websites but with tools to better connect with customers & users.
            As a <a href={vfaUrl}>Venture For America</a> Fellow, he recognizes the essential nature of entrepreneurship in the U.S. economy.
          </p>
        </div>
        <div className="col-6">
          <span className="image fit"><img src={prof} alt="" /></span>
        </div>
      </div>
    </section>
  )
}

export default About