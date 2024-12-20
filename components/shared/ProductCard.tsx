import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Title } from './tittle'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'

interface IParams {
  // id: number
  name: string
  price: number
  imageUrl: string
  className?: string,
}

const ProductCard: React.FC<IParams> = ({ className, imageUrl, name, price }) => {
  return (
    <>
      <article className={className}>
        <Link href={`/product/${name}`} >
          <div className='flex items-center justify-center  rounded-xl h-[260px]'>
            <img src={imageUrl} alt={name} className='w-[210px] h-[210px]' />   {/* width={250} height={250} */}
          </div>

          <h3 className='font-bold mt-3 text-[22px]' >{name}</h3>

          <p className='text-[#B1B1B1]  font-medium text-xs mb mt-2 mb-3'>Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок</p>

          <div className='flex justify-between items-center'>
            <b className='text-base font-extrabold'>{price}</b>
            <Button variant={'secondary'} className='flex justify-center items-center gap-1 text-[#FE5F00] text-sm font-semibold'>
              <Plus size={20} />
              Добавить
            </Button>
          </div>
        </Link>
      </article>
    </>
  )
}

export default ProductCard