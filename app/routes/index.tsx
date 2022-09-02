import { Link } from '@remix-run/react'
import Servant from '../../public/images/Servant.png'

export default function Index() {
  return (
    <div className='w-screen h-[calc(100vh-56px)] flex items-center justify-center'>
      <Link to='/servants'>
        <div className='avatar flex flex-col items-center'>
          <img src={Servant} alt='servant' />
          <span className='text-2xl'>Servants</span>
        </div>
      </Link>
    </div>
  )
}
