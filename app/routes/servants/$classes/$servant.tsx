import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData, useNavigate } from '@remix-run/react'
import type { BaseSyntheticEvent } from 'react'
import { useState } from 'react'
import { db } from '~/utils/db.server'
import AscensionButton from './components/AscensionButton'

export const loader: LoaderFunction = async ({ params }) => {
  const data = await db.servant.findFirst({
    where: { id: Number(params.servant ?? 0) },
    include: {
      skills: true,
      ascension: true,
    },
  })
  return data
}

export default function Servant() {
  const servant = useLoaderData<Servant>()
  const [ascension, setAscension] = useState<keyof Ascension>('first')
  const navigate = useNavigate()

  const handleAscensionChange = (e: BaseSyntheticEvent) => {
    setAscension(e.target.value as keyof Ascension)
  }

  return (
    <div>
      <button onClick={() => navigate(-1, { replace: true })}>Back</button>
      <h1>{servant.name}</h1>
      <h2 className='capitalize'>{servant.className}</h2>
      {servantAscenscionLevel.map((asc, i) => (
        <AscensionButton
          key={i}
          ascension={asc}
          onClick={handleAscensionChange}
        />
      ))}
      <img src={servant.ascension[0][ascension]} alt={servant.name} />

      <div>
        <h3>Skills</h3>
        {servant.skills.map((skill, i) => (
          <div key={i}>
            <span>{skill.name}</span>
            <img src={skill.icon} alt={skill.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

const servantAscenscionLevel = [
  { stage: 'first', display: 1 },
  { stage: 'second', display: 2 },
  { stage: 'third', display: 3 },
  { stage: 'fourth', display: 4 },
]
