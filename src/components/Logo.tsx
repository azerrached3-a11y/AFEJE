"use client";

export default function Logo({
  size = 40,
  className = "",
  animate = false,
  interactive = false,
}: {
  size?: number;
  className?: string;
  animate?: boolean;
  interactive?: boolean;
}) {
  const wrapperClass = [
    "inline-block",
    interactive ? "logo-interactive" : "",
    animate ? "logo-animate" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const uid = `logo-${Math.random().toString(36).slice(2, 8)}`;

  return (
    <div className={wrapperClass} style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        <defs>
          <radialGradient id={`${uid}-apex`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00FFFF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`${uid}-core`} cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#00FFFF" stopOpacity="0" />
          </radialGradient>
          <filter id={`${uid}-glow`}>
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={`${uid}-glow-sm`}>
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient inner glow */}
        <circle cx="100" cy="80" r="60" fill={`url(#${uid}-core)`} className="logo-ambient" />

        {/* Main "A" structure */}
        <path
          d="M58 172 L100 28"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          className="logo-branch"
          style={{ animationDelay: "0s" }}
        />
        <path
          d="M142 172 L100 28"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          className="logo-branch"
          style={{ animationDelay: "0.1s" }}
        />

        {/* Crossbar */}
        <path
          d="M72 118 L128 118"
          stroke="#00FFFF"
          strokeWidth="3"
          strokeLinecap="round"
          className="logo-branch"
          style={{ animationDelay: "0.2s" }}
        />

        {/* Growth branches from apex */}
        <path
          d="M100 28 L82 8"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="logo-fork"
          style={{ animationDelay: "0.3s" }}
        />
        <path
          d="M100 28 L118 8"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="logo-fork"
          style={{ animationDelay: "0.35s" }}
        />

        {/* Base forks — left */}
        <path
          d="M58 172 L40 192"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          className="logo-fork"
          style={{ animationDelay: "0.4s" }}
        />
        <path
          d="M58 172 L62 195"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          className="logo-fork"
          style={{ animationDelay: "0.45s" }}
        />

        {/* Base forks — right */}
        <path
          d="M142 172 L160 192"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          className="logo-fork"
          style={{ animationDelay: "0.5s" }}
        />
        <path
          d="M142 172 L138 195"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          className="logo-fork"
          style={{ animationDelay: "0.55s" }}
        />

        {/* Apex glow node */}
        <circle cx="100" cy="28" r="14" fill={`url(#${uid}-apex)`} className="logo-tip-glow" />
        <circle cx="100" cy="28" r="6" fill="#00FFFF" filter={`url(#${uid}-glow)`} className="logo-core" />

        {/* Crossbar nodes */}
        <circle cx="72" cy="118" r="3.5" fill="#00FFFF" filter={`url(#${uid}-glow-sm)`} opacity="0.8" className="logo-tip" style={{ animationDelay: "0s" }} />
        <circle cx="128" cy="118" r="3.5" fill="#00FFFF" filter={`url(#${uid}-glow-sm)`} opacity="0.8" className="logo-tip" style={{ animationDelay: "0.1s" }} />

        {/* Branch tip nodes */}
        {[
          [82, 8], [118, 8],
          [40, 192], [62, 195],
          [160, 192], [138, 195],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="5" fill="#00FFFF" opacity="0.1" className="logo-tip-glow" style={{ animationDelay: `${0.1 * i}s` }} />
            <circle cx={cx} cy={cy} r="2.5" fill="#00FFFF" opacity="0.7" className="logo-tip" style={{ animationDelay: `${0.1 * i}s` }} />
          </g>
        ))}

        {/* Base leg nodes */}
        <circle cx="58" cy="172" r="3" fill="white" opacity="0.4" className="logo-tip" style={{ animationDelay: "0.2s" }} />
        <circle cx="142" cy="172" r="3" fill="white" opacity="0.4" className="logo-tip" style={{ animationDelay: "0.3s" }} />
      </svg>
    </div>
  );
}
