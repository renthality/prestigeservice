interface Props {
  className?: string;
  size?: number;
}

const CrownLogo = ({ className = "", size = 96 }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Prestige Service"
  >
    <defs>
      <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8a6a1f" />
        <stop offset="35%" stopColor="#FFD700" />
        <stop offset="50%" stopColor="#fff3a8" />
        <stop offset="65%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#8a6a1f" />
      </linearGradient>
      <linearGradient id="goldGrad2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff3a8" />
        <stop offset="100%" stopColor="#a37c25" />
      </linearGradient>
    </defs>

    {/* Outer shield */}
    <path
      d="M60 8 L102 22 V60 C102 86 84 104 60 114 C36 104 18 86 18 60 V22 Z"
      fill="url(#goldGrad2)"
      stroke="url(#goldGrad)"
      strokeWidth="2"
    />
    {/* Inner shield */}
    <path
      d="M60 18 L94 28 V60 C94 80 80 96 60 104 C40 96 26 80 26 60 V28 Z"
      fill="#0a0a0a"
      stroke="url(#goldGrad)"
      strokeWidth="1.2"
    />

    {/* Crown */}
    <g>
      <path
        d="M38 50 L46 38 L54 50 L60 36 L66 50 L74 38 L82 50 L80 64 H40 Z"
        fill="url(#goldGrad)"
        stroke="#5a4416"
        strokeWidth="0.8"
      />
      <circle cx="46" cy="36" r="2.4" fill="#fff3a8" stroke="#5a4416" strokeWidth="0.5" />
      <circle cx="60" cy="34" r="2.8" fill="#fff3a8" stroke="#5a4416" strokeWidth="0.5" />
      <circle cx="74" cy="36" r="2.4" fill="#fff3a8" stroke="#5a4416" strokeWidth="0.5" />
      <rect x="40" y="64" width="40" height="3" fill="url(#goldGrad)" />
    </g>

    {/* Letters PS */}
    <text
      x="60"
      y="92"
      textAnchor="middle"
      fontFamily="Cinzel, serif"
      fontSize="16"
      fontWeight="700"
      fill="url(#goldGrad)"
    >
      PS
    </text>
  </svg>
);

export default CrownLogo;
