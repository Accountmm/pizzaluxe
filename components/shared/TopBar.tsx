import React from 'react'

import { Container } from './container'
import Categories from './Categories'
import CartButton from './CartButton'

interface IParams {
  className?: string
}
const TopBar: React.FC<IParams> = ({ className }) => {
  return (
    <div className='sticky top-0 bg-white-1 backdrop-blur-md  z-[5] py-2'>
      <Container className='flex items-center justify-between'>
        <Categories className={className} />
        <CartButton />
      </Container>
    </div>
  )
}

export default TopBar