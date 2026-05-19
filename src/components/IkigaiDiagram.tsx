const CIRCLES = [
  { cx: 170, cy: 170, delay: '0.2s', label: 'LO QUE AMAS',              lx: 72,  ly: 52  },
  { cx: 310, cy: 170, delay: '0.45s', label: 'LO QUE HACES BIEN',        lx: 408, ly: 52  },
  { cx: 170, cy: 310, delay: '0.7s', label: 'LO QUE EL MUNDO NECESITA', lx: 72,  ly: 432 },
  { cx: 310, cy: 310, delay: '0.95s', label: 'POR LO QUE TE PAGAN',      lx: 408, ly: 432 },
]

interface Props {
  size?: number
}

function IkigaiDiagram({ size = 480 }: Props) {
  return (
    <svg
      viewBox="-40 -40 560 560"
      width={size}
      height={size}
      overflow="visible"
      aria-hidden="true"
    >
      <defs>
        <filter id="center-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="14" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="ring-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Circles */}
      {CIRCLES.map(({ cx, cy, delay }) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={130}
          fill="rgba(245,197,24,0.04)"
          stroke="rgba(245,197,24,0.22)"
          strokeWidth="1"
          filter="url(#ring-glow)"
          style={{
            animation: 'scaleIn 0.8s cubic-bezier(0.16,1,0.3,1) both',
            animationDelay: delay,
            transformOrigin: `${cx}px ${cy}px`,
          }}
        />
      ))}

      {/* Center glow */}
      <circle
        cx={240}
        cy={240}
        r={28}
        fill="#F5C518"
        opacity={0.18}
        filter="url(#center-glow)"
        style={{
          animation: 'scaleIn 1s ease both',
          animationDelay: '1.2s',
          transformOrigin: '240px 240px',
        }}
      />

      {/* Center dot */}
      <circle
        cx={240}
        cy={240}
        r={4}
        fill="#F5C518"
        opacity={0.7}
        style={{
          animation: 'scaleIn 0.5s ease both',
          animationDelay: '1.35s',
          transformOrigin: '240px 240px',
        }}
      />


      {/* Quadrant labels */}
      {CIRCLES.map(({ lx, ly, delay, label }) => {
        const anchor = lx < 240 ? 'end' : 'start'
        const lines = label.split(' ')
        const mid = Math.ceil(lines.length / 2)
        const line1 = lines.slice(0, mid).join(' ')
        const line2 = lines.slice(mid).join(' ')
        return (
          <text
            key={label}
            x={lx}
            y={ly}
            textAnchor={anchor}
            fontSize="10"
            fontFamily="Space Mono, monospace"
            letterSpacing="1.5"
            fill="rgba(160,174,192,0.45)"
            style={{
              animation: 'fadeSlideUp 0.6s ease both',
              animationDelay: `calc(${delay} + 0.5s)`,
            }}
          >
            <tspan x={lx} dy="0">{line1}</tspan>
            {line2 && <tspan x={lx} dy="14">{line2}</tspan>}
          </text>
        )
      })}
    </svg>
  )
}

export default IkigaiDiagram
