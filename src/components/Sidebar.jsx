import profile from "../assets/profile.jpg";

import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaImages,
  FaServicestack,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Sidebar() {
  return (
    <div className="sidebar">

      {/* Profile Section */}
      <div className="profile">
        <img src="/profile.jpg" alt="profile" />
        <h2>Abinaya A V</h2>

        {/* Social Icons */}
        <div className="social-icons">

          <a
            href="http://github.com/abinayaabiabi13-cpu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="www.linkedin.com/in/abinaya-a-v-6b723a2a4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://leetcode.com/u/abixya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode />
          </a>

        </div>
      </div>

      {/* Navigation */}
      <ul className="nav-menu">

        <li>
          <a href="#home" className="nav-link">
            <FaHome className="icon" /> Home
          </a>
        </li>

        <li>
          <a href="#about" className="nav-link">
            <FaUser className="icon" /> About
          </a>
        </li>

        <li>
          <a href="#resume" className="nav-link">
            <FaFileAlt className="icon" /> Resume
          </a>
        </li>

        <li>
          <a href="#skills" className="nav-link">
            <FaServicestack className="icon" /> Skills
          </a>
        </li>

        <li>
          <a href="#contact" className="nav-link">
            <FaEnvelope className="icon" /> Contact
          </a>
        </li>

        <li>
          <FaImages className="icon" />
          <span>Portfolio</span>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;