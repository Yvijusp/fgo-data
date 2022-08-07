import type { BaseSyntheticEvent } from 'react'

export default function AscensionButton({
  onClick,
  ascension,
  value,
}: AscensionButtonProps) {
  return (
    <>
      <button
        value={value[ascension.stage as keyof typeof value]}
        name='image'
        onClick={onClick}
        type='submit'
        data-stage={ascension.stage}
        className='w-10  border-2 border-blue-600'
      >
        {ascension.display}
      </button>
    </>
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
}
