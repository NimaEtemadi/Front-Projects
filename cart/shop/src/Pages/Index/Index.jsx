import React,{ useState,useEffect } from 'react'
import './Index.css'
import Card from '../../Components/Card/Card'
export default function Index() {
    
  const [productsData, setProductsData] = useState()
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
          .then(res => res.json())
          .then(data => {
            setProductsData(data)
            data.map(da => console.log(da.image[0]))
            console.log(data)
          })
      }, [])
  return (
    <> 
    <section>
    <p className='title'>All Products:</p>
  </section>
  <img className='index-first-bg' src="/hero-gradient.svg" alt="" />
  <main className='main-index'>
    {productsData && productsData.map(product => (
      <Card key={product.id} {...product} />
    ))}

  </main> 
  </>
  )
}
