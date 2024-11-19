import React, { FC } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'
import { Container } from './container'

interface IParams {
  className?: string
}
const Header: FC<IParams> = ({ className }) => {
  return (
    <>
      <header className={cn('border border-b ', className)}>
        <Container className='flex justify-between items-center py-8'>
          {/* left side */}
          <div className='flex gap-4 items-center'>
            <Image src={'/logo.svg'} alt='logo' width={35} height={35} />
            <div className='flex flex-col items-start gap-2'>
              <h1 className='text-2xl font-black uppercase'>pizzaluxe</h1>
              <p className='text-base text-gray-600 leading-3'>вкусней уже некуда</p>
            </div>
          </div>

          {/* right side */}
          <div className='flex items-center gap-4'>
            <Button variant={'outline'} className='flex items-center justify-center gap-2'>
              <User size={16} />
              Войти
            </Button>

            <Button className='group relative'>
              <b className='text-white text-sm font-bold'>500$</b>
              <span className='h-full w-[1px] bg-white/30 mx-1' />
              <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                <ShoppingCart size={16} className='relative' />
                <span className='text-white text-sm font-bold'>3</span>
              </div>
              <ArrowRight size={16} className='absolute right-5 transition duration-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0' />
            </Button>
          </div>
        </Container>
      </header>
    </>
  )
}

export default Header