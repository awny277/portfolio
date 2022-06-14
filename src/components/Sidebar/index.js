import React from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import logoS from '../../assets/images/logo-s.png'
import logoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link to="/" className="logo">
          <img src={logoS} alt="logo" />
          <img className="sub-logo" src={logoSubtitle} alt="slobodan" />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="actve" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="actve"
            className={'about-link'}
            to="/about"
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="actve"
            className={'contact-link'}
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/abdelrahman-awny/"
              target={'_blank'}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/awny277"
              target={'_blank'}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Abdelrahman2486"
              target={'_blank'}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
            </a>
          </li>{' '}
          <li>
            <a
              href="https://www.facebook.com/abdo.awny.9/"
              target={'_blank'}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/abdelrahman_awny/"
              target={'_blank'}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar
