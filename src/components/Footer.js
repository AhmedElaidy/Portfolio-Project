import "./FooterStyles.css";
import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>El Mahalla El Kubra,</p>
              <p>Egypt.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +20 01013234833
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              alaidy.y123@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p className="description">
            I am ahmed elaidy, a guy with a big dream and a big passion, i love
            to design and code.
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/ahmedelaidy/" target='_blank' rel="noreferrer">
              <FaLinkedin
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                  cursor: "pointer",
                }}
              />
            </a>
            <a href="https://github.com/AhmedElaidy?tab=repositories" target='_blank' rel="noreferrer">
            <FaGithub
              size={20}
              style={{ color: "#fff", marginRight: "2rem", cursor: "pointer" }}
            />
            </a>
            <a href="https://app.netlify.com/teams/ahmedelaidy/overview" target='_blank' rel="noreferrer">
            <SiNetlify
            size={20}
            style={{ color: "#fff", marginRight: "2rem", cursor: "pointer" }}
            />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100010121524318" target='_blank' rel="noreferrer">
            <FaFacebook
            size={20}
            style={{ color: "#fff", marginRight: "2rem", cursor: "pointer" }}
            />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
