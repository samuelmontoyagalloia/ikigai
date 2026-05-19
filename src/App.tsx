import { useNavigate } from 'react-router-dom'
import Button from './components/Button'
import IkigaiDiagram from './components/IkigaiDiagram'

const fadeUp = (delay: string) => ({
  animation: 'fadeSlideUp 0.75s cubic-bezier(0.16,1,0.3,1) both',
  animationDelay: delay,
})

function App() {
  const navigate = useNavigate()

  return (
    <main className="relative min-h-dvh">

      {/* Subtle radial atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 72% 50%, rgba(245,197,24,0.045) 0%, transparent 70%)',
        }}
      />

      {/* Mobile: diagram as faded background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.12] lg:hidden">
        <IkigaiDiagram size={380} />
      </div>

      {/* Outer shell: centers the container on both axes */}
      <div className="relative z-10 flex min-h-dvh items-center justify-center px-[5vw] py-16">

        {/* Centered max-width container, two columns on desktop */}
        <div className="grid w-full max-w-[1200px] grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">

          {/* ── Left: copy ── */}
          <div className="flex w-full max-w-3xl flex-col gap-6">

            <p style={fadeUp('0s')} className="font-mono text-xs tracking-[0.22em] text-primary/60 uppercase">
              SysBook · Diagnóstico de Propósito
            </p>

            <h1 style={fadeUp('0.15s')} className="font-serif text-6xl font-bold leading-[1.08] tracking-tight text-white lg:text-7xl xl:text-[5rem]">
              Descubre dónde converge lo que eres.
            </h1>

            <div style={fadeUp('0.3s')} className="h-px w-12 bg-primary/40" />

            <p style={fadeUp('0.35s')} className="max-w-xl font-mono text-base leading-[1.7] text-text-secondary">
              Un diagnóstico de 100 preguntas para identificar tu Ikigai — la
              intersección entre propósito, habilidad y valor.
            </p>

            <div style={fadeUp('0.5s')} className="flex items-center gap-5 font-mono text-xs tracking-[0.18em] text-text-secondary/50 uppercase">
              <span>100 preguntas</span>
              <span className="text-primary/35">·</span>
              <span>4 dimensiones</span>
              <span className="text-primary/35">·</span>
              <span>1 resultado</span>
            </div>

            <div style={fadeUp('0.65s')} className="w-fit">
              <Button
                label="Iniciar diagnóstico"
                icon="→"
                onClick={() => navigate('/diagnostic')}
              />
            </div>

          </div>

          {/* ── Right: diagram ── */}
          <div className="hidden lg:flex items-center justify-center">
            <IkigaiDiagram size={480} />
          </div>

        </div>
      </div>
    </main>
  )
}

export default App
