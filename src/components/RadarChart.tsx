"use client";

import { useEffect, useState } from "react";

interface RadarChartProps {
  data: { label: string; value: number }[];
  size?: number;
  animated?: boolean;
}

export default function RadarChart({
  data,
  size = 320,
  animated = true,
}: RadarChartProps) {
  const [progress, setProgress] = useState(animated ? 0 : 1);

  useEffect(() => {
    if (!animated) return;
    const start = performance.now();
    const duration = 1800;

    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      setProgress(1 - Math.pow(1 - t, 3));
      if (t < 1) requestAnimationFrame(tick);
    }

    const timer = setTimeout(() => requestAnimationFrame(tick), 300);
    return () => clearTimeout(timer);
  }, [animated]);

  const cx = size / 2;
  const cy = size / 2;
  const maxR = size * 0.36;
  const n = data.length;

  const getPoint = (index: number, value: number) => {
    const angle = (2 * Math.PI * index) / n - Math.PI / 2;
    return {
      x: cx + (value / 100) * maxR * Math.cos(angle),
      y: cy + (value / 100) * maxR * Math.sin(angle),
    };
  };

  const gridLevels = [20, 40, 60, 80, 100];

  const makePolygon = (level: number) =>
    Array.from({ length: n }, (_, i) => {
      const p = getPoint(i, level);
      return `${p.x},${p.y}`;
    }).join(" ");

  const dataPoints = data.map((d, i) => getPoint(i, d.value * progress));
  const dataPolygon = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");

  const labelOffset = 1.22;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="select-none"
    >
      <defs>
        <radialGradient id="radarGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00FFFF" stopOpacity="0" />
        </radialGradient>
        <filter id="glowFilter">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background glow */}
      <circle cx={cx} cy={cy} r={maxR * 1.1} fill="url(#radarGlow)" />

      {/* Grid polygons */}
      {gridLevels.map((level, i) => (
        <polygon
          key={level}
          points={makePolygon(level)}
          fill="none"
          stroke={
            i === gridLevels.length - 1
              ? "rgba(255,255,255,0.12)"
              : "rgba(255,255,255,0.06)"
          }
          strokeWidth={i === gridLevels.length - 1 ? 1 : 0.5}
        />
      ))}

      {/* Axis lines */}
      {Array.from({ length: n }, (_, i) => {
        const p = getPoint(i, 100);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={p.x}
            y2={p.y}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={0.5}
          />
        );
      })}

      {/* Data polygon fill */}
      <polygon
        points={dataPolygon}
        fill="rgba(0,255,255,0.08)"
        stroke="none"
      />

      {/* Data polygon stroke with glow */}
      <polygon
        points={dataPolygon}
        fill="none"
        stroke="#00FFFF"
        strokeWidth={2}
        strokeLinejoin="round"
        filter="url(#glowFilter)"
        opacity={progress}
      />

      {/* Data points */}
      {dataPoints.map((p, i) => (
        <g key={i} opacity={progress}>
          <circle cx={p.x} cy={p.y} r={8} fill="rgba(0,255,255,0.1)" />
          <circle cx={p.x} cy={p.y} r={4} fill="#00FFFF" />
          <circle cx={p.x} cy={p.y} r={2} fill="#000" />
        </g>
      ))}

      {/* Score labels on points */}
      {dataPoints.map((p, i) => {
        const angle = (2 * Math.PI * i) / n - Math.PI / 2;
        const offsetX = Math.cos(angle) * 18;
        const offsetY = Math.sin(angle) * 18;
        return (
          <text
            key={`score-${i}`}
            x={p.x + offsetX}
            y={p.y + offsetY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="#00FFFF"
            fontSize={11}
            fontWeight="bold"
            fontFamily="monospace"
            opacity={progress}
          >
            {Math.round(data[i].value * progress)}
          </text>
        );
      })}

      {/* Dimension labels */}
      {data.map((d, i) => {
        const lp = getPoint(i, 100 * labelOffset);
        const angle = (2 * Math.PI * i) / n - Math.PI / 2;
        const isLeft = Math.cos(angle) < -0.1;
        const isRight = Math.cos(angle) > 0.1;
        const anchor = isLeft ? "end" : isRight ? "start" : "middle";

        return (
          <text
            key={`label-${i}`}
            x={lp.x}
            y={lp.y}
            textAnchor={anchor}
            dominantBaseline="middle"
            fill="rgba(255,255,255,0.5)"
            fontSize={10}
            fontWeight="600"
            letterSpacing="0.05em"
          >
            {d.label}
          </text>
        );
      })}
    </svg>
  );
}
