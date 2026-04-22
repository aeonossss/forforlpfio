import { SiReact, SiFigma } from 'react-icons/si';
import { DiGithubBadge, DiJsBadge } from 'react-icons/di';

const techSkills = [
  { node: <DiJsBadge />, label: 'JavaScript' },
  { node: <SiReact />, label: 'React' },
  { node: <img src="/dart.svg" alt="Dart" style={{ width: '52px', height: '52px' }} />, label: 'Dart' },
  { node: <img src="/flutter.svg" alt="Flutter" style={{ width: '52px', height: '52px' }} />, label: 'Flutter' },
  { node: <SiFigma />, label: 'Figma' },
  { node: <img src="/netlify.svg" alt="Netlify" style={{ width: '52px', height: '52px' }} />, label: 'Netlify' },
  { node: <DiGithubBadge />, label: 'GitHub' },
];

const softSkills = [
  'Communication', 'Creativity', 'Adaptability', 'Collaboration',
  'Teamwork', 'Problem-Solving', 'Active listening', 'Curiosity', 'Analytical thinking',
];

export default function Skills() {
  return (
    <div style={styles.wrapper}>
      <p style={styles.label}>Technical Skills:</p>
      <div style={styles.iconRow}>
        {techSkills.map(({ node, label }) => (
  <div key={label} title={label} className="skill-icon">
    <span style={styles.icon}>{node}</span>
  </div>
))}
      </div>

      <p style={styles.label}>Soft Skills:</p>
      <div style={styles.softRow}>
        {softSkills.map(skill => (
        <span key={skill} className="soft-skill-item">{skill}</span>
        ))}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    padding: '0 1rem',
  },
  title: {
    fontStyle: 'italic',
    fontWeight: 400,
    fontSize: '2rem',
    margin: 0,
  },
  label: {
    fontWeight: 700,
    fontSize: '0.9rem',
    margin: 0,
    color: '#EAF9C8',
  },
  iconRow: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  iconItem: {
    cursor: 'default',
  },
  icon: {
    fontSize: '52px',
    display: 'block',
    lineHeight: 1,
  },
  softRow: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  softItem: {
    fontSize: '0.9rem',
  },
};