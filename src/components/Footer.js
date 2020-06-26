import React from 'react'

const Footer = () => {

  const twitterUrl = "https://twitter.com/real_pavoreal";
  const instagramUrl = "https://www.instagram.com/pro_bono_dev/";
  const githubUrl = "https://github.com/jamespeacock";
  const mailtoUrl = "mailto: james.hoke.peacock@gmail.com"

  return (
      <section id="footer">
          <ul className="icons">
              <li><a href={twitterUrl} className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href={instagramUrl} className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href={githubUrl} className="icon alt fa-github"><span className="label">GitHub</span></a></li>
              <li><a href={mailtoUrl} className="icon alt fa-envelope"><span className="label">Email</span></a></li>
          </ul>
          <ul className="copyright">
              <li>&copy; Pavoreal Design Company</li>
          </ul>
      </section>
  )
}

export default Footer
