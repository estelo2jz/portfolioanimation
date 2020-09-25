import React, { Component } from 'react';

import { FaCode, FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaCodepen } from 'react-icons/fa';

export default class About extends Component {
  render() {
    return (
      <div className="about-helper-outer">
        <div className="about-grid-container">
          <div className="about-header-summary">
            <div className="about-header-helper">
              <h3>Estelo Abellanosa</h3>
              <p>Front-End Web Developer</p>
              <p>
              I'm a tech enthusiast passionate in codes.
              I design, build web applications.
              </p>
              <p>
                Innovative Front-End Web Developer with 2 years of experience in building and implementing websites,
                Decided to pursue a carrer in tech and went to <a href="https://bottega.tech/" target="_blank">Bottega tech</a> an online coding bootcamp.
              </p>
            </div>
          </div>
          <div className="about-summary">
            <div className="about-skills-container">
              <h4>Skills & Abilities</h4>
              <div className="about-inner-container block-effect">
                <div class="block-reveal">HTML</div>
                <div class="block-reveal">CSS/SCSS</div>
                <div class="block-reveal">Web Development</div>
                <div class="block-reveal">UI Developer</div>
                <div class="block-reveal">JavaScript</div>
                <div class="block-reveal">Python</div>
                <div class="block-reveal">JSON</div>
                <div class="block-reveal">NodeJS</div>
                <div class="block-reveal">ExpressJS</div>
                <div class="block-reveal">React</div>
                <div class="block-reveal">Web design</div>
                <div class="block-reveal">MySQL</div>
                <div class="block-reveal">MongoDB</div>
                <div class="block-reveal">Data Structure</div>
              </div>
            </div>
            <div className="about-code-summary">
              <div className="about-code-summary-helper">
                <h4>CODE</h4>
                <p>
                  I like to code starting from scratch, and see where it leads me. I like to animate things and bringing ideas to life in the browser.
                  I value simple content structure, clean design patterns, and thoughtful user experience.
                </p>
              </div>
            </div>
          </div>
          <div className="about-social-links">
            <div className="about-socials-container">
              <div className="">
                <div className="about-social-animation">
                  <a href="https://www.facebook.com/estelo.abellanosa" target="_blank"><FaFacebook /></a>
                </div>
                <div className="about-social-animation">
                  <a href="https://twitter.com/EsteloManitoba" target="_blank"><FaTwitter /></a>
                </div>
                <div className="about-social-animation">
                  <a href="https://www.linkedin.com/in/estelo-abellanosa-83a335186/" target="_blank"><FaLinkedin /></a>
                </div>
                <div className="about-social-animation">
                  <a href="https://github.com/estelo2jz" target="_blank"><FaGithub /></a>
                </div>
                <div className="about-social-animation">
                  <a href="https://codepen.io/manitobaaa" target="_blank"><FaCodepen /></a>
                </div>
              </div>
            </div>

            <div className="about-social-letters">
              <ul>
                <li>S</li>
                <li>o</li>
                <li>c</li>
                <li>i</li>
                <li>a</li>
                <li>l</li>
                <li>s</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    )
  }
}
