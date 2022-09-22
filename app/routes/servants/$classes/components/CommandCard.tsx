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
  switch (card) {
    case 'quick':
      return (
        <div className='relative h-[60px] w-[60px] flex items-center'>
          <img
            className='absolute left-[11%]'
            src={QuickBackground}
            alt='background'
          />
          <img
            className='absolute left-0 top-0'
            src={servantImage}
            alt={servantName}
          />
          <img
            className='absolute top-[48%] left-[10%] '
            src={QuickIcon}
            alt='background'
          />
          <img
            className='absolute top-[59%] left-[10%]'
            src={QuickText}
            alt='text'
          />
        </div>
      )
    case 'arts':
      return (
        <div className='relative h-[60px] w-[60px] flex items-center'>
          <img
            className='absolute left-[11%]'
            src={ArtsBackground}
            alt='background'
          />
          <img
            className='absolute left-0 top-0'
            src={servantImage}
            alt={servantName}
          />
          <img
            className='absolute top-[48%] left-[10%] '
            src={ArtsIcon}
            alt='background'
          />
          <img
            className='absolute top-[59%] left-[10%]'
            src={ArtsText}
            alt='text'
          />
        </div>
      )
    case 'buster':
      return (
        <div className='relative h-[60px] w-[60px] flex items-center'>
          <img
            className='absolute left-[11%]'
            src={BusterBackground}
            alt='background'
          />
          <img
            className='absolute left-0 top-0'
            src={servantImage}
            alt={servantName}
          />
          <img
            className='absolute top-[48%] left-[10%] '
            src={BusterIcon}
            alt='background'
          />
          <img
            className='absolute top-[59%] left-[10%]'
            src={BusterText}
            alt='text'
          />
        </div>
      )
  }
  return null
}

interface CommandCardProps {
  servantImage: string
  servantName: string
  card: string
}
