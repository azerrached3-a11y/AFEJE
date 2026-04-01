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
          <radialGradient id={`${uid}-coreGlow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00FFFF" stopOpacity="0" />
          </radialGradient>
          <filter id={`${uid}-glow`}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient glow behind core */}
        <circle cx="100" cy="100" r="28" fill={`url(#${uid}-coreGlow)`} className="logo-ambient" />

        {/* Pulsing outer ring */}
        <circle cx="100" cy="100" r="22" stroke="#00FFFF" strokeWidth="0.8" opacity="0.15" className="logo-ring-outer" />
        <circle cx="100" cy="100" r="16" stroke="#00FFFF" strokeWidth="1" opacity="0.25" className="logo-ring" />

        {/* Central core */}
        <circle cx="100" cy="100" r="7" fill="#00FFFF" filter={`url(#${uid}-glow)`} className="logo-core" />

        {/* Branch 1 — top */}
        <path d="M100 92 L100 45" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="logo-branch" style={{ animationDelay: "0s" }} />
        <path d="M100 45 L86 22" stroke="white" strokeWidth="2" strokeLinecap="round" className="logo-fork" style={{ animationDelay: "0.1s" }} />
        <path d="M100 45 L114 22" stroke="white" strokeWidth="2" strokeLinecap="round" className="logo-fork" style={{ animationDelay: "0.15s" }} />

        {/* Branch 2 — top right */}
        <path d="M107 95 L150 60" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="logo-branch" style={{ animationDelay: "0.08s" }} />
        <path d="M150 60 L174 54" stroke="white" strokeWidth="2" strokeLinecap="round" className="logo-fork" style={{ animationDelay: "0.18s" }} />
        <path d="M150 60 L162 38" stroke="white" strokeWidth="2" strokeLinecap="round" className="logo-fork" style={{ animationDelay: "0.22s" }} />

        {/* Branch 3 — bottom right */}
        <path d="M107 105 L150 140" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="logo-branch" style={{ animationDelay: "0.16s" }} />
        <path d="M150 140 L174 146" stroke="white" strokeWidth="2" strokeLinecap="round" className="logo-fork" style={{ animationDelay: "0.26s" }} />
        <path d="M150 140 L162 162" stroke="white" strokeWidth="2" strokeLinecap="round" className="logo-fork" style={{ animationDelay: "0.3s" }} />

        {/* Branch 4 — bottom */}
        <path d="M100 108 L100 155" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="logo-branch" style={{ animationDelay: "0.24s" }} />
        <path d="M100 155 L86 178" stroke="white" strokeWidth="2" strokeLinecap="round" className="logo-fork" style={{ animationDelay: "0.34s" }} />
        <path d="M100 155 L114 178" stroke="white" strokeWidth="2" strokeLinecap="round" className="logo-fork" style={{ animationDelay: "0.38s" }} />

        {/* Branch 5 — bottom left */}
        <path d="M93 105 L50 140" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="logo-branch" style={{ animationDelay: "0.32s" }} />
        <path d="M50 140 L26 146" stroke="white" strokeWidth="2" strokeLinecap="round" className="logo-fork" style={{ animationDelay: "0.42s" }} />
        <path d="M50 140 L38 162" stroke="white" strokeWidth="2" strokeLinecap="round" className="logo-fork" style={{ animationDelay: "0.46s" }} />

        {/* Branch 6 — top left */}
        <path d="M93 95 L50 60" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="logo-branch" style={{ animationDelay: "0.4s" }} />
        <path d="M50 60 L26 54" stroke="white" strokeWidth="2" strokeLinecap="round" className="logo-fork" style={{ animationDelay: "0.5s" }} />
        <path d="M50 60 L38 38" stroke="white" strokeWidth="2" strokeLinecap="round" className="logo-fork" style={{ animationDelay: "0.54s" }} />

        {/* Tip nodes — interactive glow dots */}
        {[
          [86, 22], [114, 22],
          [174, 54], [162, 38],
          [174, 146], [162, 162],
          [86, 178], [114, 178],
          [26, 146], [38, 162],
          [26, 54], [38, 38],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="4" fill="#00FFFF" opacity="0.08" className="logo-tip-glow" style={{ animationDelay: `${0.1 * i}s` }} />
            <circle cx={cx} cy={cy} r="2.5" fill="#00FFFF" opacity="0.7" className="logo-tip" style={{ animationDelay: `${0.1 * i}s` }} />
          </g>
        ))}
      </svg>
    </div>
  );
}
