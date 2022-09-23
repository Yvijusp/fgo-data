import type { BaseSyntheticEvent } from 'react'

export default function AscensionButton({
  onClick,
  ascension,
  value,
  isActive,
}: AscensionButtonProps) {
  return (
    <button
      value={value[ascension.stage as keyof typeof value]}
      name='image'
      onClick={onClick}
      type='submit'
      data-stage={ascension.stage}
      className={`tab text-secondary tab-bordered ${
        isActive ? 'tab-active' : ''
      }`}
      disabled={isActive}
    >
      {ascension.display}
    </button>
  )
}

interface AscensionButtonProps {
  onClick: (e: BaseSyntheticEvent) => void
  ascension: { stage: string; display: number }
  value: {
    first: string
    second: string
    third: string
    fourth: string
    0?: string | undefined
  }
  isActive: boolean
}
