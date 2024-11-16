import React from 'react'

import { Container } from './container'
import Categories from './Categories'
import Sort from './Sort'

interface IParams {
  className?: string
}
const TopBar: React.FC<IParams> = ({ className }) => {
  return (
    <div className='sticky top-0 bg-white drop-shadow-md shadow-black/5  z-10 py-2'>
      <Container className='flex items-center justify-between'>
        <Categories className={className} />
        <Sort />
      </Container>
    </div>
  )
}

export default TopBar