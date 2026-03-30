import './App.css';
import BorderGlow from './assets/BorderGlow';

function App(){
  return(
    <div className='mainPage'>
      <div className='header'>
        <a href='#Work'>Work</a>
        <div id='work'>
          Work
          <div className='work-cards'>
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
            <h2>Technical Portfolio</h2>
            <a href='https://design-team-todo.netlify.app' className='link'>https://design-team-todo.netlify.app</a>
            <p>A custom-built to-do list application created for the Shore360 Design Department to improve task organization and workflow efficiency. The system features structured job number tracking and alarm notifications to help the team manage deadlines and priorities effectively. Designed with a minimalist approach, the interface emphasizes clarity, ease of use, and a seamless user experience that supports productivity without visual clutter.</p>
            <img src='' alt='tech-portfolio'></img>
          </div>
        </BorderGlow>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default App;