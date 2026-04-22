import { useState } from "react";

const games = [
  { id: 1, src: "roblox.svg", alt: "Roblox", username: "Aeonosss" },
  { id: 2, src: "overwatch.svg", alt: "Overwatch", username: "aeo" },
  { id: 3, src: "valorant.svg", alt: "Valorant", username: "Aeo#nosss" },
  { id: 4, src: "genshin.svg", alt: "Genshin", username: "808454788" },
];

export default function Igns() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (id, username) => {
    navigator.clipboard.writeText(username);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="game-section">
      <p className="game-subtitle">Want to add me?</p>
      <div className="game-icons">
        {games.map(({ id, src, alt, username }) => (
          <div
            key={id}
            className={`game-icon ${copied === id ? "copied" : ""}`}
            onClick={() => handleCopy(id, username)}
            title={username}
          >
            <img src={src} alt={alt} />
            <span className="tooltip">
              {copied === id ? "Copied!" : username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}