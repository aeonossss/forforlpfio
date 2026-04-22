const polaroids = [
  { id: 1, rotate: '-6deg', src: '/zhongli.svg' },
  { id: 2, rotate: '8deg',  src: '/astarion.svg' },
  { id: 3, rotate: '-5deg', src: '/tecna.svg' },
  { id: 4, rotate: '5deg',  src: '/noodle.svg' },
];

export default function PolaroidRow() {
  return (
    <div style={styles.row}>
      {polaroids.map(({ id, rotate, src }) => (  // 👈 added src here
        <div
          key={id}
          style={{ ...styles.polaroid, '--r': rotate }}
          className="polaroid"
        >
          <img src={src} alt="" style={styles.photo} />  {/* 👈 img not div */}
        </div>
      ))}
    </div>
  );
}

const styles = {
  row: {
    display: 'flex',
    gap: '24px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem 1rem',
    flexWrap: 'wrap',
  },
  polaroid: {
    background: '#fff',
    padding: '12px 12px 40px',
    boxShadow: '2px 3px 8px rgba(0,0,0,0.15)',
    transform: 'rotate(var(--r))',
    width: '140px',
    flexShrink: 0,
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  photo: {
    width: '100%',
    aspectRatio: '1',
    objectFit: 'cover',
    display: 'block',
    background: '#e5e5e5'
  },
};