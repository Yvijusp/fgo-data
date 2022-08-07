import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { Form, useLoaderData, useNavigate, useParams } from '@remix-run/react'
import type { BaseSyntheticEvent } from 'react'
import { useState } from 'react'
import { db } from '~/utils/db.server'
import AscensionButton from './components/AscensionButton'
import { saveImageToFs } from '~/utils/saveImageToFs'
import { updateAscension } from '~/utils/updateAscension'

export const action: ActionFunction = async ({ params, request }) => {
  const formData = await request.formData()
  const file = formData.get('image') as string
  const servantName = formData.get('servantName') as string
  const stage = formData.get('stage') as string
  if (file.includes('http')) {
    saveImageToFs(file, servantName)
  }

  updateAscension(stage, servantName, params.servant)
  return null
}

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
  const [ascension, setAscension] = useState<string>(servant.ascension[0].first)
  const [ascensionStage, setAscensionStage] = useState<number>(1)
  const navigate = useNavigate()
  const { classes } = useParams()

  const handleAscensionChange = (e: BaseSyntheticEvent) => {
    setAscension(e.target.value)
    setAscensionStage(e.target.attributes['data-stage'].value)
  }

  return (
    <div>
      <button
        onClick={() => navigate(`/servants/${classes}`, { replace: true })}
      >
        Back
      </button>
      <h1>{servant.name}</h1>
      <h2 className='capitalize'>{servant.className}</h2>
      <Form method='post'>
        <div className='flex gap-1 ml-2'>
          {servantAscenscionLevel.map((asc, i) => (
            <AscensionButton
              key={i}
              ascension={asc}
              value={servant.ascension[0]}
              onClick={handleAscensionChange}
            />
          ))}
        </div>
        <input
          value={`${servant.name}_${servant.id}_${ascensionStage}`
            .toLowerCase()
            .split(' ')
            .join('_')}
          name='servantName'
          type='hidden'
        />
        <input type='hidden' name='stage' value={ascensionStage} />
        <img src={ascension} alt={servant.name} />
      </Form>

      <div>
        <h3>Skills</h3>
        {servant.skills.map((skill, i) => (
          <div key={i}>
            <span>{skill.name}</span>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.detail}</p>
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
