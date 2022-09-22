import React from 'react'
import type { ReactNode } from 'react'

export default function ServantTableItem({
  item,
  colSpan,
}: ServantTableItemProps) {
  return (
    <tr>
      {item.map((i, index) => (
        <React.Fragment key={index}>
          <th className='border border-primary'>{i.title}</th>
          <td colSpan={colSpan} className='border-primary'>
            <span className='capitalize flex justify-center'>{i.value}</span>
          </td>
        </React.Fragment>
      ))}
    </tr>
  )
}

interface ServantTableItemProps {
  item: {
    title: string
    value: ReactNode
  }[]
  colSpan?: number
}
