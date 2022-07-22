export const servantMapper = (servants: ServantResponse[]): Servant[] => {
  return servants.map((servant) => {
    return {
      id: servant.id,
      name: servant.name,
      className: servant.className,
      rarity: servant.rarity,
      cost: servant.cost,
      ascension: servant.extraAssets.charaGraph.ascension,
      face: servant.extraAssets.faces.ascension,
      gender: servant.gender,
      attribute: servant.attribute,
      traits: servant.traits,
      starAbsorb: servant.starAbsorb,
      starGen: servant.starGen,
      cards: servant.cards,
      atkBase: servant.atkBase,
      atkMax: servant.atkMax,
      hpBase: servant.hpBase,
      hpMax: servant.hpMax,
      bondGrowth: servant.bondGrowth,
      ascensionMaterials: mapAscensionMaterials(servant.ascensionMaterials),
      skills: mapSkills(servant.skills),
    }
  })
}

const mapAscensionMaterials = (
  ascensionMaterials: AscensionMaterialResponse
) => {
  if (!ascensionMaterials.items) return []
  return new Array(4).fill(null).map((_, i) => {
    return {
      item: {
        id: ascensionMaterials[i].items[0].item.id,
        name: ascensionMaterials[i].items[0].item.name,
        icon: ascensionMaterials[i].items[0].item.icon,
      },
      amount: ascensionMaterials[i].items[0].amount,
      qp: ascensionMaterials[i].qp,
    }
  })
}

const mapSkills = (skills: Skills[]) => {
  return skills.map((skill) => {
    return {
      id: skill.id,
      num: skill.num,
      name: skill.name,
      detail: skill.detail,
      type: skill.type,
      icon: skill.icon,
      coolDown: skill.coolDown,
    }
  })
}
