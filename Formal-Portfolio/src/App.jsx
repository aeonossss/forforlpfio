import './App.css';
import BorderGlow from './assets/BorderGlow';
import eyaIrl from './assets/imgs/eya-irl.svg';
import eyaAeo from './assets/imgs/eya-aeo.svg';
import ClickSpark from './assets/ClickSpark';

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
              <button className='resume'>Contact</button>
            </div>
          </div>
          <div className='landing-content'>
            <div className='text-group'>
              <h1>Eya Isabel Yalung</h1>
              <p>Front-End Developer | UI/UX Designer</p>
              <p>Frontend developer focused on bridging functionality and visual design, creating seamless and engaging digital experiences. With a strong UI/UX foundation in design systems, branding, prototyping, and wireframing, I transform ideas into polished, user-centered interfaces that enhance usability and strengthen brand identity.</p>
            </div>
          <div className='me'></div>
          </div>
        </div>
        <div id='work'>
          <div className='section-Title'>Work</div>
          <div className='work-cards'>
            Front-End
          <BorderGlow
            edgeSensitivity={2}
            glowColor="40 20 80"
            backgroundColor="#A3AAD7"
            borderRadius={16}
            glowRadius={10}
            glowIntensity={.5}
            coneSpread={10}
            animated={true}
            colors={['#E4E6F3', '#EAF9C8', '#F0F7F1']}
          >
          <div style={{ padding: '2em' }}>
            <div>
              <div style={{ gap: '0' }}>
                <h2>Technical Portfolio</h2>
              <a href='https://design-team-todo.netlify.app' className='links' target='_blank' rel='noopener noreferrer'>https://design-team-todo.netlify.app</a>
              </div>
              <p>A custom-built to-do list application created for the Shore360 Design Department to improve task organization and workflow efficiency. The system features structured job number tracking and alarm notifications to help the team manage deadlines and priorities effectively. Designed with a minimalist approach, the interface emphasizes clarity, ease of use, and a seamless user experience that supports productivity without visual clutter.</p>
            </div>
            <img src='' alt='tech-portfolio'></img>
          </div>

          </BorderGlow>

        <BorderGlow
            edgeSensitivity={2}
            glowColor="40 20 80"
            backgroundColor="#A3AAD7"
            borderRadius={16}
            glowRadius={10}
            glowIntensity={.5}
            coneSpread={10}
            animated={true}
            colors={['#006314', '#EAF9C8', '#5b8103']}
          >
          <div style={{ padding: '2em' }}>
            <h2>Graphic Designer Portfolio</h2>
            <a href='https://eya-yalung.netlify.app' className='links' target='_blank' rel='noopener noreferrer'>https://eya-yalung.netlify.app</a>
            <p>A custom-built to-do list application created for the Shore360 Design Department to improve task organization and workflow efficiency. The system features structured job number tracking and alarm notifications to help the team manage deadlines and priorities effectively. Designed with a minimalist approach, the interface emphasizes clarity, ease of use, and a seamless user experience that supports productivity without visual clutter.</p>
            <img src='' alt='tech-portfolio'></img>
          </div>

        </BorderGlow>
        </div>
        </div>
      </ClickSpark>
    </div>
  )
}

export default App;