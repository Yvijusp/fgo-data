import { Link } from '@remix-run/react'
import { servantClasses } from '~/data/servantClasses'

export default function Servants() {
  return (
    <div>
      <h1 className='text-4xl font-bold text-primary text-center'>Servants</h1>
      <div>
        <h2 className='text-2xl font-bold text-primary text-center'>Classes</h2>
        <div className='flex justify-center mt-12'>
          <div className='grid grid-cols-4 gap-2 w-[720px]'>
            {servantClasses.map(({ name, icon, param }) => (
              <div
                key={name}
                className='flex justify-center flex-col items-center'
              >
                <h3 className='text-lg font-bold text-secondary mb-1'>
                  {name}
                </h3>
                <Link prefetch='intent' to={`${param}`}>
                  <img className='w-16' src={icon} alt={name} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
