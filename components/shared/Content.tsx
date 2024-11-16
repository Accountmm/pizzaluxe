'use client'

import React from 'react'
import { Container } from './container'
import ProductsList from './products-list'
import { getDessertProducts, getPizzaProducts } from '@/lib/geProducts'

const Content = () => {
  const [pizzaProducts, setPizzaProducts] = React.useState<IProduct[]>([])
  const [dessertProducts, setDessertProducts] = React.useState<IProduct[]>([])
  const [isLoading, setIsLoading] = React.useState<boolean>(true)

  React.useEffect(() => {
    async function setProducts() {
      try {
        const pizzaRes = await getPizzaProducts();
        const dessertRes = await getDessertProducts();
        setPizzaProducts(pizzaRes);
        setDessertProducts(dessertRes);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false)
      }
    }
    setProducts()
  }, [])

  return (
    <>
      <Container >
        <div className='flex flex-col items-center justify-between'>
          <ProductsList
            products={[
              ...pizzaProducts
            ]}
            title='Пицца'
            isLoading={isLoading}
            categoryName='pizza'
          />
          <ProductsList
            products={[
              ...dessertProducts
            ]}
            title='Десерты'
            isLoading={isLoading}
            categoryName='dessert'
          />
        </div>
      </Container>
    </>
  )
}

export default Content