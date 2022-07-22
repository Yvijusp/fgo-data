import React from 'react'

export default function Servants({ servants }: { servants: Servant[] }) {
  return (
    <div className='grid grid-cols-4 gap-2'>
      {servants.map((servant) => (
        <React.Fragment key={servant.id}>
          {servant.name !== 'Solomon' && (
            <div>
              <h2>{servant.name}</h2>
              <img src={servant.face[1]} alt={servant.name} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
