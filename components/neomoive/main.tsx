import React, {ReactNode} from 'react'

export default function Main({children}: {children: ReactNode}) {
  return (
    <div className='mt-12 mx-4 flex flex-col md:flex-row  gap-8'>{children}</div>
  )
}
