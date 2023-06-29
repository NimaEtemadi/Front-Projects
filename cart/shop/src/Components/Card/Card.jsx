import React,{useContext} from 'react'
import ContextData from '../../Context/Context'
import './Card.css'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
export default function Card(props) {
  const context =useContext(ContextData)
  const navigate=useNavigate()
  const addToBasket=(productData)=>{
    
    let isInUserCart=context.UserCart.some(product=>{
      return product.id == productData.id
    }) 
    let newUserCartProduct = {
      id:productData.id,
      title: productData.title,
      price: productData.price,
      image :productData.image,
      rate: props.rating.rate,
      count: 1,
  }
 
  if (isInUserCart) {
    let userCart = [...context.UserCart];
    userCart.some(bagProduct => {
      if (bagProduct.title === productData.title) {
        bagProduct.count += 1
        return true
      }
    })
  }else{
       context.setUserCart((prevProducts) => [...prevProducts,  newUserCartProduct, ]);
  }
 
   
  
  swal({
    title:'Product Added Successful',
    icon:'success',
    buttons:['ok','Go to Basket']
  }).then(res=>{
   if (res) {
    navigate('/cart')
   }
  })
}
  return (
    <div className="card">
                <img src={props.image} alt="" />
                <main>
                      <p>{props.title.slice(0,13)}...</p> 
                      <div className='card-details'>
                         <div>
                         {Array(Math.ceil(props.rating.rate)).fill(0).map(score=>(
                        <AiFillStar style={{color:'orange'}}/>
                      ))}
                          {Array( 5 - Math.ceil(props.rating.rate)).fill(0).map(score=>(
                        <AiOutlineStar style={{color:'orange'}}/>
                      ))}
                         </div>
                      <p>{props.price}$</p>
                      </div>
                   <button onClick={()=>addToBasket(props)}>Add to Basket</button>
                </main>
            
              </div>
  )
}
