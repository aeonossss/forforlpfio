import { useState } from 'react';
import { MdEmail, MdCheck } from 'react-icons/md';

export default function ContactButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('yalungeya@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button className='contact' onClick={handleCopy} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {copied ? <MdCheck size={18} /> : <MdEmail size={18} />}
      {copied ? 'Copied!' : 'Contact'}
    </button>
  );
}