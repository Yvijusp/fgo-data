export const servantMapper = (servants: ServantResponse[]) => {
  return servants
    .filter((ser) => ser.id !== 9935530)
    .map((servant) => {
      return {
        id: servant.id,
        name: servant.name,
        className: servant.className,
        rarity: servant.rarity,
        cost: servant.cost,
        gender: servant.gender,
        attribute: servant.attribute,
        starAbsorb: servant.starAbsorb,
        starGen: servant.starGen,
        cards: servant.cards,
        atkBase: servant.atkBase,
        atkMax: servant.atkMax,
        hpBase: servant.hpBase,
        hpMax: servant.hpMax,
        bondGrowth: servant.bondGrowth,
      }
    })
}

export const mapAscension = (servants: ServantResponse[]) => {
  return servants
    .filter((ser) => ser.id !== 9935530)
    .map((servant) => {
      return {
        servantId: servant.id,
        first:
          servant.extraAssets.charaGraph.ascension[0] ||
          servant.extraAssets.charaGraph.ascension[1],
        second:
          servant.extraAssets.charaGraph.ascension[0] ||
          servant.extraAssets.charaGraph.ascension[2],
        third:
          servant.extraAssets.charaGraph.ascension[0] ||
          servant.extraAssets.charaGraph.ascension[3],
        fourth:
          servant.extraAssets.charaGraph.ascension[0] ||
          servant.extraAssets.charaGraph.ascension[4],
      }
    })
}

export const mapCommands = (servants: ServantResponse[]) => {
  return servants
    .filter((ser) => ser.id !== 9935530)
    .map((servant) => {
      return {
        servantId: servant.id,
        first: servant.extraAssets.commands?.ascension?.[1] || 'empty',
        second: servant.extraAssets.commands?.ascension?.[2] || 'empty',
        third: servant.extraAssets.commands?.ascension?.[3] || 'empty',
      }
    })
}

export const mapFace = (servants: ServantResponse[]) => {
  return servants
    .filter((ser) => ser.id !== 9935530)
    .map((servant) => {
      return {
        servantId: servant.id,
        first:
          servant.extraAssets.faces.ascension[0] ||
          servant.extraAssets.faces.ascension[1],
        second:
          servant.extraAssets.faces.ascension[0] ||
          servant.extraAssets.faces.ascension[2],
        third:
          servant.extraAssets.faces.ascension[0] ||
          servant.extraAssets.faces.ascension[3],
        fourth:
          servant.extraAssets.faces.ascension[0] ||
          servant.extraAssets.faces.ascension[4],
      }
    })
}

export const mapServantSkills = (servants: ServantResponse[]) => {
  return servants
    .filter((ser) => ser.id !== 9935530)
    .map((servant) => {
      return mapSkills(servant.skills, servant.id)
    })
}

export const mapSkills = (skills: Skills[], id: number) => {
  return skills.map((skill) => {
    return {
      servantId: id,
      num: skill.num,
      name: skill.name,
      detail: skill.detail,
      type: skill.type,
      icon: skill.icon,
      coolDown: skill.coolDown,
    }
  })
}
