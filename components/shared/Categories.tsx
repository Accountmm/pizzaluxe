'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'

const Categories = ({ className }: { className?: string }) => {
  const tabs = useCategoryStore((state) => state.categories)
  const activeCategoryName = useCategoryStore((state) => state.activeName)
  return (
    <section className={cn('flex items-center gap-6', className)}>
      {
        tabs.map((el,) => (
          <Link
            key={el.path}
            href={`/#${el.path.toLowerCase()}`}
            className={cn('flex items-center justify-center font-bold rounded-2xl transition ease-in-out cursor-pointer text-black', el.name === activeCategoryName && 'text-primary')}
          >
            <p className='hover:text-primary  font-boldx'>
              {el.name}
            </p>
          </Link>
        ))
      }
    </section >
  )
}

export default Categories