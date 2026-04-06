import './App.css';
import BorderGlow from './assets/BorderGlow';
import ClickSpark from './assets/ClickSpark';
import LogoLoop from './component/LogoLoop';
import Waves from './component/Waves';
import { SiReact } from 'react-icons/si';
import { DiGithubBadge, DiJsBadge, DiPython } from "react-icons/di";
import { FaLinkedin } from 'react-icons/fa'

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <DiGithubBadge />, title: "Github", href: "https://github.com/aeonossss"},
  { node: <DiJsBadge />, title: "Javascript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
  { node: <DiPython />, title: "Python", href: "https://www.python.org/"},
  { src: "dart.svg", alt: "Dart", href: "https://dart.dev/docs" },
  { src: "netlify.svg", alt: "Netlify", href: "https://www.netlify.com/" },
  { src: "flutter.svg", alt: "Flutter", href: "https://flutter.dev/" },
];


function App(){
  return(
    <div className='mainPage'>
      <ClickSpark
          sparkColor='#EAF9C8'
          sparkSize={10}
          sparkRadius={20}
          sparkCount={6}
          duration={200}
        >
            <div className='landing-section'>
              <div className='header'>
                <div className='header-links'>
                  <div className='tabs'>
                    <a href='#work'>Work</a>
                    <a href='#skills'>Skills</a>
                    <a href='#interests'>Interests</a>
                  </div>
                  <a className='contact' href=''>
                    <button className='contact'>
                    Contact
                  </button>
                  </a>
                </div>
              </div>
              <div className='landing-content'>
                <div className='text-group'>
                  <h1>EYA ISABEL YALUNG</h1>
                  <p>Front-End Developer | UI/UX Designer</p>
                  <p>Frontend developer focused on bridging functionality and visual design, creating seamless and engaging digital experiences. With a strong UI/UX foundation in design systems, branding, prototyping, and wireframing, I transform ideas into polished, user-centered interfaces that enhance usability and strengthen brand identity.</p>
                  <button className='resume' href=''> Download CV</button>
                </div>
                <div className='me'></div>
              
              </div>
            </div>
            <div id='logo-loop'>
                  <div style={{ position: 'relative', overflow: 'hidden'}}>
                    <LogoLoop
                      logos={techLogos}
                      speed={100}
                      direction="left"
                      logoHeight={60}
                      gap={60}
                      hoverSpeed={0}
                      fadeOut
                      useCustomRender={false}
                  />
                </div>
            </div>
            <div id='work'>
              <Waves
                lineColor="#362b4e"
                backgroundColor="rgba(66, 55, 66, 0.2)"
                waveSpeedX={0.01}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={12}
                yGap={36}
              />
              
              <div className='section-Title' style={{position: 'relative', zIndex: 1}}>Work</div>
                <div className='section' style={{position: 'relative', zIndex: 1}}>
                  Front-End
                  </div>
                  <div className='work-cards'>
                    <div className='frontend'>
                      <BorderGlow
                      edgeSensitivity={2}
                      glowColor="40 20 80"
                      backgroundColor="#16141C"
                      borderRadius={16}
                      glowRadius={10}
                      glowIntensity={.5}
                      coneSpread={10}
                      animated={true}
                      colors={['#6aee84', '#EAF9C8', '#b3ff00']}
                    >
                    <div style={{ padding: '2em' }}>
                      <div>
                        <div style={{ gap: '0' }}>
                          <h2>Technical Portfolio</h2>
                        <a href='https://design-team-todo.netlify.app' className='links' target='_blank' rel='noopener noreferrer'>https://design-team-todo.netlify.app</a>
                        </div>
                        <p>A custom-built to-do list application created for the Shore360 Design Department to improve task organization and workflow efficiency. The system features structured job number tracking and alarm notifications to help the team manage deadlines and priorities effectively. Designed with a minimalist approach, the interface emphasizes clarity, ease of use, and a seamless user experience that supports productivity without visual clutter.</p>
                      </div>
                    </div>

                    </BorderGlow>

                    <BorderGlow
                        edgeSensitivity={2}
                        glowColor="40 20 80"
                        backgroundColor="#16141C"
                        borderRadius={16}
                        glowRadius={10}
                        glowIntensity={.5}
                        coneSpread={10}
                        animated={true}
                        colors={['#6aee84', '#EAF9C8', '#b3ff00']}
                      >
                      <div style={{ padding: '2em' }}>
                        <h2>Graphic Designer Portfolio</h2>
                        <a href='https://eya-yalung.netlify.app' className='links' target='_blank' rel='noopener noreferrer'>https://eya-yalung.netlify.app</a>
                        <p>Developed in a React.js environment using HTML, CSS, and JavaScript, this portfolio draws inspiration from Frutiger Aero. It showcases a range of works, including graphic designs, layouts, and asset creation, enhanced with interactive elements reminiscent of the Windows 7 interface, complete with an integrated music player.</p>
                      </div>
                    </BorderGlow>
                    </div>
                    <div className='ui' style={{position: 'relative', zIndex: 1}}>
                  UI/UX Design
                  </div>

                  <div className='uiux'>
                    <BorderGlow
                      edgeSensitivity={2}
                      glowColor="40 20 80"
                      backgroundColor="#16141C"
                      borderRadius={16}
                      glowRadius={10}
                      glowIntensity={.5}
                      coneSpread={10}
                      animated={true}
                      colors={['#6aee84', '#EAF9C8', '#b3ff00']}
                    >
                    <div style={{ padding: '2em' }}>
                      <div>
                        <div style={{ gap: '0' }}>
                          <h2>Technical Portfolio</h2>
                        <a href='' className='links' target='_blank' rel='noopener noreferrer'>Link coming soon!</a>
                        </div>
                        <p>A custom-built to-do list application created for the Shore360 Design Department to improve task organization and workflow efficiency. The system features structured job number tracking and alarm notifications to help the team manage deadlines and priorities effectively. Designed with a minimalist approach, the interface emphasizes clarity, ease of use, and a seamless user experience that supports productivity without visual clutter.</p>
                      </div>
                    </div>

                    </BorderGlow>

                    <BorderGlow
                        edgeSensitivity={2}
                        glowColor="40 20 80"
                        backgroundColor="#16141C"
                        borderRadius={16}
                        glowRadius={10}
                        glowIntensity={.5}
                        coneSpread={10}
                        animated={true}
                        colors={['#6aee84', '#EAF9C8', '#b3ff00']}
                      >
                      <div style={{ padding: '2em' }}>
                        <h2>Spray Lab Perfume Bar Website</h2>
                        <a href='' className='links' target='_blank' rel='noopener noreferrer'>Link coming soon!</a>
                        <p>A custom-built to-do list application created for the Shore360 Design Department to improve task organization and workflow efficiency. The system features structured job number tracking and alarm notifications to help the team manage deadlines and priorities effectively. Designed with a minimalist approach, the interface emphasizes clarity, ease of use, and a seamless user experience that supports productivity without visual clutter.</p>
                      </div>
                    </BorderGlow>
                  </div>
                  </div>
            </div>

            <div id='cert'>
              <div className='cert-title'>
                Certifications
              </div>
                insert certs here
            </div>

            <div id='skills'>
              <div className='skills-title'>
                Skills  
              </div>  
                <ul className='soft-skills'>
                    <li>Communication</li>
                    <li>Creativity</li>
                    <li>Adaptability</li>
                    <li>Collaboration</li>
                    <li>Teamwork</li>
                    <li>Problem-Solving</li>
                    <li>Active listening</li>
                    <li>Curiosity</li>
                    <li>Analytical thinking</li>
                </ul>
            </div>

            <div id='interests'>
              <div className='interests-title'>
                Interests  
              </div>
              insert interests here
            </div>

            <div id='footer'>
              <div className='footer-content'>
                <div>
                  <h1>EYA ISABEL YALUNG</h1>
                  <p>Front-End Developer | UI/UX Designer</p>
                  <button className='resume' href=''> Download CV</button>
                </div>
                  
                  <div className="quick-links">
                    <h4>Quick Links</h4>
                    <ul>
                      <li><a href="#work">Work</a></li>
                      <li><a href="#skills">Skills</a></li>
                      <li><a href="#interests">Interests</a></li>
                    </ul>
                  </div>
                  <div className='web-href'>
                    <h4>Wrong Website?</h4>
                    <p>Try:</p>
                    <button className='designer-port'>Designer Portfolio</button>
                    <div className="social-icons">
                    <a href="https://github.com/aeonossss" target="_blank" rel="noopener noreferrer">
                      <DiGithubBadge size={28} />
                    </a>
                    <a href="https://linkedin.com/in/e-yalung" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={24} />
                    </a>
                    </div>
                  </div>
                  <hr></hr>
                  <div className='rights'>
                    <div>
                     Eya Isabel Yalung © 2025.
                  </div>
                  <div>
                      All rights reserved.
                  </div>
                  </div>
              </div>
            </div>
      </ClickSpark>
    </div>
  )
}

export default App;