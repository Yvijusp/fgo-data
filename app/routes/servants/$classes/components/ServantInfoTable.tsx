import { AscensionLevel } from '../$servant'
import CommandCard from './CommandCard'
import ServantTableItem from './ServantTableItem'

export default function ServantInfoTable({
  servant,
  ascensionStage,
}: ServantInfoTableProps) {
  return (
    <table className='table border border-primary'>
      <tbody>
        <ServantTableItem
          item={[
            { title: 'Class', value: servant.className },
            { title: 'Attribute', value: servant.attribute },
          ]}
        />
        <ServantTableItem
          item={[
            { title: 'Rarity', value: String(servant.rarity) },
            { title: 'Cost', value: String(servant.cost) },
          ]}
        />
        <ServantTableItem
          item={[
            {
              title: 'HP',
              value: `Base: ${servant.hpBase} Max: ${servant.hpMax}`,
            },
          ]}
          colSpan={3}
        />
        <ServantTableItem
          item={[
            {
              title: 'ATK',
              value: `Base: ${servant.atkBase} Max: ${servant.atkMax}`,
            },
          ]}
          colSpan={3}
        />
        <ServantTableItem
          item={[
            {
              title: 'Deck',
              value: servantDeck(servant, ascensionStage),
            },
          ]}
          colSpan={3}
        />
        <ServantTableItem
          item={[
            { title: 'Star Weight', value: servant.starAbsorb },
            { title: 'Star Gen', value: `${servant.starGen / 10} %` },
          ]}
        />
      </tbody>
    </table>
  )
}

function servantDeck(servant: Servant, ascensionStage: AscensionLevel) {
  return servant.cards.map((card) => {
    return servant.commands.map((command) => (
      <CommandCard
        card={card}
        key={command.id}
        servantImage={
          command[
            ascensionStage !== AscensionLevel.FOURTH
              ? ascensionStage
              : AscensionLevel.THIRD
          ]
        }
        servantName={servant.name}
      />
    ))
  })
}

interface ServantInfoTableProps {
  servant: Servant
  asenscionStage: AscensionLevel
}
