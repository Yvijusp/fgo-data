import {
  ArtsBackground,
  ArtsIcon,
  ArtsText,
  BusterBackground,
  BusterIcon,
  BusterText,
  QuickBackground,
  QuickIcon,
  QuickText,
} from '~/data/commandCards'

export default function CommandCard({
  servantImage,
  servantName,
  card,
}: CommandCardProps) {
  return (
    <div className='relative h-[60px] w-[60px] flex items-center'>
      <img
        className='absolute left-[11%]'
        src={getCardType(card)?.background}
        alt='background'
      />
      <img
        className='absolute left-0 top-[-3%] min-w-[70px]'
        src={servantImage}
        alt={servantName}
      />
      <img
        className='absolute top-[48%] left-[10%] '
        src={getCardType(card)?.icon}
        alt='background'
      />
      <img
        className='absolute top-[59%] left-[10%]'
        src={getCardType(card)?.text}
        alt='text'
      />
    </div>
  )
}

function getCardType(cardType: string) {
  switch (cardType) {
    case 'quick':
      return {
        background: QuickBackground,
        icon: QuickIcon,
        text: QuickText,
      }
    case 'arts':
      return {
        background: ArtsBackground,
        icon: ArtsIcon,
        text: ArtsText,
      }
    case 'buster':
      return {
        background: BusterBackground,
        icon: BusterIcon,
        text: BusterText,
      }
  }
}

interface CommandCardProps {
  servantImage: string
  servantName: string
  card: string
}
