import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate,
  useSubmit,
} from '@remix-run/react'
import { debounce } from 'lodash'
import { useCallback } from 'react'
import Servants from '~/components/Servants'
import { db } from '~/utils/db.server'

export const action: ActionFunction = async ({ params, request }) => {
  const formData = await request.formData()
  const servant = formData.get('servantFilter')

  const filteredServant = await db.servant.findMany({
    where: {
      className: params.classes,
      name: { contains: servant as string, mode: 'insensitive' },
    },
    include: {
      face: true,
    },
    orderBy: {
      name: 'asc',
    },
  })

  return filteredServant
}

export const loader: LoaderFunction = async ({ params }) => {
  const data = await db.servant.findMany({
    where: { className: params.classes },
    include: {
      face: true,
    },
    orderBy: {
      name: 'asc',
    },
  })

  return data
}

export default function Classes() {
  const submit = useSubmit()
  const servants = useLoaderData<Servant[]>()
  const filteredServant = useActionData<Servant[]>()
  const navigate = useNavigate()

  const debouncedSubmit = useCallback(
    debounce((value) => submit(value), 300),
    [submit]
  )

  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    debouncedSubmit(e.currentTarget)
  }

  return (
    <div>
      <div className='flex gap-4'>
        <button
          className='btn btn-primary btn-sm'
          onClick={() => navigate('/servants', { replace: true })}
        >
          Back
        </button>
        <Form method='post' onChange={handleChange}>
          <input
            className='input input-sm input-primary'
            type='text'
            placeholder='Search Servant'
            name='servantFilter'
          />
        </Form>
      </div>
      {<Servants servants={filteredServant || servants} />}
    </div>
  )
}
