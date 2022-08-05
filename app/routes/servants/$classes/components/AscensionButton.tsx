import type { BaseSyntheticEvent } from 'react'

export default function AscensionButton({
  onClick,
  ascension,
}: AscensionButtonProps) {
  return (
    <button value={ascension.stage} onClick={onClick}>
      {ascension.display}
    </button>
  )
}

interface AscensionButtonProps {
  onClick: (e: BaseSyntheticEvent) => void
  ascension: { stage: string; display: number }
}
