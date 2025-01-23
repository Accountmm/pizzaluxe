'use client'

import { useIntersection } from 'react-use';
import React from 'react'
import { Title } from './tittle'
import ProductCard from './ProductCard'
import { useCategoryStore } from '@/store/category';
import LoaderProduct from './ProductLoader';
import { cn } from '@/lib/utils';

interface IParams {
  title: string
  products: IProduct[]
  // categoryId: number // ?  this might be used  
  categoryName: string
  listClassName?: string
  className?: string
  isLoading?: boolean
}

const ProductsList: React.FC<IParams> = ({ products, title, className, isLoading, categoryName }) => {
  const productsLoader = new Array(8).fill(null).map((_, i) => <LoaderProduct key={i} />) // creating loader for products 
  const changeCategoryName = useCategoryStore((state) => state.setActiveName)
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 1
  });

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      changeCategoryName(title)
    }
  }, [intersection?.isIntersecting, categoryName, title, changeCategoryName])

  return (
    <section id={categoryName} className={cn(className, 'pt-8')} >

      <Title text={title} size='xl' className={'font-bold ml-3'} reactRef={intersectionRef} />

      <div className='grid grid-cols-4 gap-[50px] mt-5'>
        {
          !isLoading
            ? products.map((product: IProduct, index: number) => (
              <ProductCard
                key={index}
                // id={product.name}/
                imageUrl={product.image}
                name={product.name}
                price={product.price} // ! this might be an error from backend 
              />
            ))
            : productsLoader
        }
      </div>
    </section>
  )
}

export default ProductsList