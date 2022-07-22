interface ServantResponse {
  id: number
  name: string
  className: string
  rarity: number
  cost: number
  extraAssets: {
    charaGraph: {
      ascension: Ascension
    }
    faces: {
      ascension: Ascension
    }
  }
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
  ascensionMaterials: AscensionMaterialResponse
  skills: Skills[]
}

interface AscensionMaterialResponse {
  [key: string]: {
    items: [item: AscensionMaterial, amount: number]
    qp: number
  }
}
