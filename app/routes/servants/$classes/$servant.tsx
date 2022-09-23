import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { Form, useLoaderData, useNavigate, useParams } from '@remix-run/react'
import type { BaseSyntheticEvent } from 'react'
import { useState } from 'react'
import { db } from '~/utils/db.server'
import AscensionButton from './components/AscensionButton'
import { saveImageToFs } from '~/utils/saveImageToFs'
import { updateAscension } from '~/utils/updateAscension'
import { ServantClassIcon } from '~/data/servantClasses'
import ServantInfoTable from './components/ServantInfoTable'
import SkillsSection from './components/SkillsSection'

export enum AscensionLevel {
  FIRST = 'first',
  SECOND = 'second',
  THIRD = 'third',
  FOURTH = 'fourth',
}

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
      commands: true,
    },
  })

  return data
}

export default function Servant() {
  const servant = useLoaderData<Servant>()
  const [ascension, setAscension] = useState<string>(servant.ascension[0].first)
  const [ascensionStage, setAscensionStage] = useState<AscensionLevel>(
    AscensionLevel.FIRST
  )
  const navigate = useNavigate()
  const { classes } = useParams()

  const handleAscensionChange = (e: BaseSyntheticEvent) => {
    setAscension(e.target.value)
    setAscensionStage(e.target.attributes['data-stage'].value)
  }

  return (
    <div className='py-4'>
      <button
        className='btn btn-primary btn-sm'
        onClick={() => navigate(`/servants/${classes}`, { replace: true })}
      >
        Back
      </button>
      <div className='mt-5 mb-3 py-3 px-80 flex gap-2 items-center border-t-[1px] border-primary'>
        <ServantClassIcon className='w-12' servantClass={servant.className} />
        <h1 className='text-3xl font-bold'>{servant.name}</h1>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex items-center gap-6'>
          <div className='flex flex-col mb-auto'>
            <ServantInfoTable
              servant={servant}
              ascensionStage={ascensionStage}
            />
          </div>

          <div>
            <Form method='post'>
              <div className='tabs-boxed bg-inherit'>
                {servantAscenscionLevel.map((asc, i) => (
                  <AscensionButton
                    key={i}
                    ascension={asc}
                    isActive={getActiveTab(ascensionStage) === i + 1}
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
          </div>
        </div>

        <SkillsSection servant={servant} />
      </div>
    </div>
  )
}

function getActiveTab(type: AscensionLevel) {
  switch (type) {
    case AscensionLevel.FIRST:
      return 1
    case AscensionLevel.SECOND:
      return 2
    case AscensionLevel.THIRD:
      return 3
    case AscensionLevel.FOURTH:
      return 4
  }
}

const servantAscenscionLevel = [
  { stage: AscensionLevel.FIRST, display: 1 },
  { stage: AscensionLevel.SECOND, display: 2 },
  { stage: AscensionLevel.THIRD, display: 3 },
  { stage: AscensionLevel.FOURTH, display: 4 },
]
