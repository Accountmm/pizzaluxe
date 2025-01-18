'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from '../ui/button'
import { User } from 'lucide-react'
import { Container } from './container'
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'
import Authorization from './Authorization'
interface IParams {
  className?: string
}
const Header: React.FC<IParams> = ({ className }) => {
  const [isAuthorizationOpen, setisAuthorizationOpen] = React.useState<boolean>(false)

  function handleAuthorizationOpen() {
    setisAuthorizationOpen((state) => !state)
  }

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
            <Dialog>
              <DialogTrigger asChild >
                <Button onClick={handleAuthorizationOpen} variant={'outline'} className='flex items-center justify-center gap-2'>
                  <User size={16} />
                  Войти
                </Button>
              </DialogTrigger>

            </Dialog>
          </div>
          <Authorization isOpen={isAuthorizationOpen} />
        </Container>
      </header>
    </>
  )
}

export default Header