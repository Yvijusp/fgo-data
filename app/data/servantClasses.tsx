import Saber from '../../public/images/saber.png'
import Archer from '../../public/images/archer.png'
import Lancer from '../../public/images/lancer.png'
import Rider from '../../public/images/rider.png'
import Caster from '../../public/images/caster.png'
import Assassin from '../../public/images/assassin.png'
import Berserker from '../../public/images/berseker.png'
import Shielder from '../../public/images/shielder.png'
import Ruler from '../../public/images/ruler.png'
import Avenger from '../../public/images/avenger.png'
import MoonCancer from '../../public/images/moon_cancer.png'
import Foreigner from '../../public/images/foreigner.png'
// import Pretender from '../../public/images/pretender.png
import AlterEgo from '../../public/images/alter_ego.png'

export const ServantClassIcon = ({
  servantClass,
  className,
}: {
  servantClass: ServantClass
  className?: string
}) => {
  let icon: string | undefined
  switch (servantClass) {
    case 'saber':
      icon = Saber
      break
    case 'archer':
      icon = Archer
      break
    case 'lancer':
      icon = Lancer
      break
    case 'rider':
      icon = Rider
      break
    case 'caster':
      icon = Caster
      break
    case 'assassin':
      icon = Assassin
      break
    case 'berserker':
      icon = Berserker
      break
    case 'shielder':
      icon = Shielder
      break
    case 'ruler':
      icon = Ruler
      break
    case 'avenger':
      icon = Avenger
      break
    case 'moonCancer':
      icon = MoonCancer
      break
    case 'foreigner':
      icon = Foreigner
      break
    // case 'Pretender':
    // return Pretender
    default:
      icon = undefined
  }

  return <img className={className} src={icon} alt={servantClass} />
}

export const servantClasses: ServantClasses[] = [
  {
    name: 'Saber',
    icon: Saber,
    param: 'saber',
  },
  {
    name: 'Archer',
    icon: Archer,
    param: 'archer',
  },
  {
    name: 'Lancer',
    icon: Lancer,
    param: 'lancer',
  },
  {
    name: 'Rider',
    icon: Rider,
    param: 'rider',
  },
  {
    name: 'Caster',
    icon: Caster,
    param: 'caster',
  },
  {
    name: 'Assassin',
    icon: Assassin,
    param: 'assassin',
  },
  {
    name: 'Berserker',
    icon: Berserker,
    param: 'berserker',
  },
  {
    name: 'Shielder',
    icon: Shielder,
    param: 'shielder',
  },
  {
    name: 'Ruler',
    icon: Ruler,
    param: 'ruler',
  },
  {
    name: 'Avenger',
    icon: Avenger,
    param: 'avenger',
  },
  {
    name: 'Moon Cancer',
    icon: MoonCancer,
    param: 'moonCancer',
  },
  {
    name: 'Alter Ego',
    icon: AlterEgo,
    param: 'alterEgo',
  },
  {
    name: 'Foreigner',
    icon: Foreigner,
    param: 'foreigner',
  },
  // {
  //   name: 'Pretender',
  //   icon: Pretender,
  //   param: 'pretender',
  // },
]

interface ServantClasses {
  name: string
  icon: string
  param: string
}
