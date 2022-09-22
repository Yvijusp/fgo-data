interface ServantResponse {
  id: number
  name: string
  className: string
  rarity: number
  cost: number
  extraAssets: {
    charaGraph: {
      ascension: AscensionResponse
    }
    faces: {
      ascension: AscensionResponse
    }
    commands: CommandsResponse
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

interface CommandsResponse {
  ascension: AscensionResponse
  costume: CostumeResponse
}

interface AscensionResponse {
  [0]?: string
  [1]: string
  [2]: string
  [3]: string
  [4]: string
}

interface CostumeResponse {
  [0]?: string
  [1]?: string
  [2]?: string
  [3]?: string
  [4]?: string
}
