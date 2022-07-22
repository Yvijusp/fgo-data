import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Servants from '~/components/Servants'
import { servantMapper } from '~/utils/mapper'

export const loader: LoaderFunction = async ({ params }) => {
  const res = await fetch(
    `https://api.atlasacademy.io/nice/JP/servant/search?className=${params.class}&lang=en`
  )

  const data: ServantResponse[] = await res.json()

  const servants = servantMapper(data)

  return servants
}

export default function Classes() {
  const servants = useLoaderData<Servant[]>()

  return <div>{<Servants servants={servants} />}</div>
}
