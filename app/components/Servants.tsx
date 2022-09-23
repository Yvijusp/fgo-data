import { Link } from '@remix-run/react'
import Image from './Image'

export default function Servants({ servants }: { servants: Servant[] }) {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-wrap gap-2 mt-10 w-[1020px]'>
        {servants.map((servant) => (
          <Link to={`${servant.id}`} className='w-60' key={servant.id}>
            <div className='flex flex-col items-center'>
              <h2 className='whitespace-nowrap'>{servant.name}</h2>
              <Image
                src={servant.face[0]?.first}
                alt={servant.name}
                skeleton={<progress className='progress w-32 h-32' />}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
