import { Link } from '@remix-run/react'

export default function Servants({ servants }: { servants: Servant[] }) {
  return (
    <div className='grid grid-cols-4 gap-2 mt-10'>
      {servants.map((servant) => (
        <Link to={`${servant.id}`} key={servant.id}>
          {servant.name !== 'Solomon' && (
            <div className='flex flex-col items-center'>
              <h2>{servant.name}</h2>
              <img src={servant.face[0]?.first} alt={servant.name} />
            </div>
          )}
        </Link>
      ))}
    </div>
  )
}
