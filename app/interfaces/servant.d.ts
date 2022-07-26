interface Servant {
  id: number
  name: string
  className: ServantClass
  rarity: number
  cost: number
  ascension: Ascension[]
  face: Ascension[]
  gender: string
  attribute: string
  traits: Traits[]
  starAbsorb: number
  starGen: number
  cards: string[]
  atkBase: number
  atkMax: number
  hpBase: number
  hpMax: number
  bondGrowth: number[]
  skills: Skills[]
  commands: Commands[]
}

type ServantClass =
  | 'saber'
  | 'archer'
  | 'lancer'
  | 'rider'
  | 'caster'
  | 'assassin'
  | 'berserker'
  | 'shielder'
  | 'ruler'
  | 'avenger'
  | 'moonCancer'
  | 'foreigner'
  | 'pretender'

interface Ascension {
  [0]?: string
  first: string
  second: string
  third: string
  fourth: string
}

interface Commands {
  id: string
  first: string
  second: string
  third: string
}

interface Traits {
  id: number
  name: string
}

interface AscensionMaterial {
  item: { id: number; name: string; icon: string }
  amount: number
  qp: number
}

interface Skills {
  id: number
  num: number
  name: string
  detail: string
  type: string
  icon: string
  coolDown: number[]
}
