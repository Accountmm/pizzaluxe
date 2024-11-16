'use client'

import React from 'react'
import { Title } from './tittle'
import { FilterCheckbox } from './chechbox-filter'
import { Input } from '../ui/input'
import { RangeSlider } from './RangeSlider'
import CheckboxFilterGroup from './CheckboxFilterGroup';
import { FilterChecboxProps } from '@/types'

const Divider = () => {
  return (
    <>
      <div className='w-full h-[1px] bg-[#F6F6F6] ' />
    </>
  )
}

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='flex flex-col gap-4' >
        {children}
      </div>
    </>
  )
}

const Items: FilterChecboxProps[] = [{ text: 'Сырный соус', value: 'Сырный соус', }, { text: 'Чеснок', value: 'Чеснок', }, { text: 'Солённые огурчики', value: 'Солённые огурчики', }, { text: 'Моцарелла', value: 'Моцарелла', }, { text: 'Сырный соус', value: 'Сырный соус', }, { text: 'Чеснок', value: 'Чеснок', }, { text: 'Солённые огурчики', value: 'Солённые огурчики', }, { text: 'Моцарелла', value: 'Моцарелла', }]


const Filters = () => {
  return (
    <>
      <Title text='Фильтрация' size='sm' className='font-black' />

      {/* Beginning chackboxs */}
      <Wrapper >
        <FilterCheckbox text='Можно собирать' value='' />
        <FilterCheckbox text='Новинки' value='' />
      </Wrapper>

      <Divider />

      {/* Price fiter */}
      <div className='flex flex-col gap-4'>
        <Title text='Цена от и до:' size='xs' className='font-extrabold' />
        <div className='flex gap-2'>
          <Input type='number' placeholder='0' min={0} max={1000} />
          <Input type='number' placeholder='1000' min={0} max={1000} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} className='mt-3' />
      </div>

      <Divider />

      <Wrapper>
        <Title text='Ингредиенты:' size='xs' className='font-extrabold' />
        <CheckboxFilterGroup
          items={Items}
          searchInputPlaceholder='Search'
          className='flex flex-col gap-4'
          limit={5}
          defaultItems={Items}
        />
      </Wrapper>
    </>
  )
}

export default Filters