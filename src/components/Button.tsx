import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'ghost'

interface ButtonProps {
  label: string
  onClick?: () => void
  icon?: ReactNode
  disabled?: boolean
  variant?: ButtonVariant
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-background border border-primary hover:brightness-110 hover:scale-[1.03]',
  ghost:
    'bg-transparent border border-white/30 text-white/80 hover:bg-white/10 hover:text-white',
}

function Button({
  label,
  onClick,
  icon,
  disabled = false,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{ paddingLeft: '1.75rem', paddingRight: '1.75rem', paddingTop: '0.75rem', paddingBottom: '0.75rem' }}
      className={[
        'inline-flex items-center gap-3 rounded-full text-lg font-bold',
        'cursor-pointer transition duration-200',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        'disabled:cursor-not-allowed disabled:opacity-40',
        variantStyles[variant],
        className,
      ]
        .join(' ')
        .trim()}
    >
      {label}
      {icon && <span className="flex shrink-0 items-center">{icon}</span>}
    </button>
  )
}

export default Button
