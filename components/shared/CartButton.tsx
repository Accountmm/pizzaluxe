import { ArrowRight, ShoppingCart } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const CartButton = () => {

  return (
    <Button className='group relative'>
      <b className='text-white text-sm font-bold'>500$</b>
      <span className='h-full w-[1px] bg-white/30 mx-1' />
      <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
        <ShoppingCart size={16} className='relative' />
        <span className='text-white text-sm font-bold'>3</span>
      </div>
      <ArrowRight size={16} className='absolute right-5 transition duration-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' />
    </Button>
  )
}

export default CartButton