interface Servant {
  id: number
  name: string
  className: string
  rarity: number
  cost: number
  ascension: Ascension
  face: Ascension
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
  ascensionMaterials: AscensionMaterial[]
  skills: Skills[]
}

interface Ascension {
  [1]: string
  [2]: string
  [3]: string
  [4]: string
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
