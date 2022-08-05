import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate,
  useSubmit,
} from '@remix-run/react'
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

  return (
    <div>
      <button onClick={() => navigate('/servants', { replace: true })}>
        Back
      </button>
      <Form method='post' onChange={(e) => submit(e.currentTarget)}>
        <input type='text' name='servantFilter' />
      </Form>
      {<Servants servants={filteredServant || servants} />}
    </div>
  )
}
