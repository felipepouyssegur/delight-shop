import React from 'react'
import "../styles.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <h3>delight</h3>
                <p>Made by: <a href='https://www.linkedin.com/in/felipepouyssegur/'>Felipe Pouyssegur</a> </p>
                <ul className="socials">
                    <li><a href="https://github.com/felipepouyssegur"><img src="https://i.ibb.co/CsXRsLn/github.png" alt="github" className='githublogo' /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer