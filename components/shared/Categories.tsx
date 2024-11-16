'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { useCategoryStore } from '@/store/category'

const Categories = ({ className }: { className?: string }) => {
  const tabs = [{ name: 'Пицца', path: 'pizza' }, { name: 'Десерты', path: 'dessert' }]
  const activeCategoryName = useCategoryStore((state) => state.activeName)
  return (
    <section className={cn('inline-flex gap-1 bg-gray-50 rounded-2xl', className)}>
      {
        tabs.map((el, index) => (
          <Link
            key={el.path}
            href={`/#${el.path.toLowerCase()}`}
            className={cn('flex items-center justify-center font-bold rounded-2xl transition ease-in-out cursor-pointer', el.name === activeCategoryName && 'bg-white rounded-2xl shadow-sm shadow-gray-200 text-primary ')}
          >
            <Button variant={'ghost'} className='hover:text-white hover:bg-primary'>
              {el.name}
            </Button>
          </Link>
        ))
      }
    </section >
  )
}

export default Categories