import './App.css';
import BorderGlow from './assets/BorderGlow';
import ClickSpark from './assets/ClickSpark';
import LogoLoop from './component/LogoLoop';
import { SiReact } from 'react-icons/si';
import { DiGithubBadge, DiJsBadge, DiPython } from "react-icons/di";

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
          sparkCount={8}
          duration={200}
        >
        <div className='landing-section'>
          <div className='header'>
            <div className='header-links'>
              <a href='#work'>Work</a>
              <a href='#skills'>Skills</a>
              <a href='#interests'>Interests</a>
              <button className='contact'>
                Contact
              </button>
            </div>
          </div>
          <div className='landing-content'>
            <div className='text-group'>
              <h1>Eya Isabel Yalung</h1>
              <p>Front-End Developer | UI/UX Designer</p>
              <p>Frontend developer focused on bridging functionality and visual design, creating seamless and engaging digital experiences. With a strong UI/UX foundation in design systems, branding, prototyping, and wireframing, I transform ideas into polished, user-centered interfaces that enhance usability and strengthen brand identity.</p>
              <button className=''> Download CV</button>
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
          <div className='section-Title'>Work</div>
            <div className='section'>
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
                    <p>A custom-built to-do list application created for the Shore360 Design Department to improve task organization and workflow efficiency. The system features structured job number tracking and alarm notifications to help the team manage deadlines and priorities effectively. Designed with a minimalist approach, the interface emphasizes clarity, ease of use, and a seamless user experience that supports productivity without visual clutter.</p>
                  </div>
                </BorderGlow>
                </div>
              </div>

              <div className='ui-section'>
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
                    <p>A custom-built to-do list application created for the Shore360 Design Department to improve task organization and workflow efficiency. The system features structured job number tracking and alarm notifications to help the team manage deadlines and priorities effectively. Designed with a minimalist approach, the interface emphasizes clarity, ease of use, and a seamless user experience that supports productivity without visual clutter.</p>
                  </div>
                </BorderGlow>
              </div>
        </div>
      </ClickSpark>
    </div>
  )
}

export default App;