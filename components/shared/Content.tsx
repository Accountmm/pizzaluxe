'use client'

import React from 'react'
import { Container } from './container'
import ProductsList from './products-list'
import { getDessertProducts, getPizzaProducts, getSnackProducts } from '@/lib/geProducts'

const Content = () => {
  const [products, setProducts] = React.useState([
    { products: [] as IProduct[], catalogName: '', title: '' },
    { products: [] as IProduct[], catalogName: '', title: '' },
    { products: [] as IProduct[], catalogName: '', title: '' }
  ])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    async function fetchProducts() {  // renamed from setProducts
      try {
        const [pizzaRes, dessertRes, snackRes] = await Promise.all([getPizzaProducts(), getDessertProducts(), getSnackProducts()])
        setProducts([
          { products: pizzaRes, catalogName: 'pizza', title: 'Пицца' },
          { products: dessertRes, catalogName: 'dessert', title: 'Десерты' },
          { products: snackRes, catalogName: 'snack', title: 'Закуски' }
        ])
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false)
      }
    }
    fetchProducts()
  }, [])
  return (
    <>
      <Container >
        <div className='flex flex-col items-center justify-between'>
          {products.map(({ products, catalogName, title }) => (
            <ProductsList
              products={products}
              title={title}
              isLoading={isLoading}
              categoryName={catalogName}
            />
          ))}
        </div>
      </Container>
    </>
  )
}

export default Content