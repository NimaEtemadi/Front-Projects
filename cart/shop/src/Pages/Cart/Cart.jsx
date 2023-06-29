import React, { useContext } from 'react'
import './Cart.css'
import ContextData from '../../Context/Context'
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from 'react-icons/ai'
export default function Cart() {
    const contex = useContext(ContextData)
    const removeAllProductHandler = () => {
        contex.setUserCart([])
    }
    const removeProductHandler = (ProductID) => {
        console.log(ProductID);
        const NewBasket=contex.UserCart.filter(product=>{
            return product.id !== ProductID
        })
        console.log(NewBasket);
        contex.setUserCart(NewBasket);
    }

   
    
    
    return (
        <>
            {contex.UserCart.length ? (
                <>
                    <section className='cart-topbar'>
                        <p className='title'>All Products In Basket:</p>
                        <button onClick={removeAllProductHandler}>Remove All Product <AiOutlineDelete className='delete-icon' /></button>
                    </section>
                    <main className='card-index'>

                        {contex.UserCart.map(data => (

                            <div className="card">
                                <img src={data.image} alt="" />
                                <main>
                                    <p>{data.title.slice(0, 13)}...</p>
                                    <div className='card-details'>
                                        <div>
                                            {Array(Math.ceil(data.rate)).fill(0).map(score => (
                                                <AiFillStar style={{ color: 'orange' }} />
                                            ))}
                                            {Array(5 - Math.ceil(data.rate)).fill(0).map(score => (
                                                <AiOutlineStar style={{ color: 'orange' }} />
                                            ))}
                                        </div>
                                        <p>{data.count * data.price}$</p>
                                    </div>
                                    <div className='product-count'>
                                      
                                        <p>Count: {data.count}</p>
                                        
                                    </div>
                                    <button onClick={() => removeProductHandler(data.id)}>Remove From Basket</button>
                                </main>

                            </div>

                        ))}
                    </main>
                </>
            ) : (
                <div className='emptyBasket'>
                    <img src="/empty.webp" alt="" />
                    <p>Your Basket Is Empty :((</p>
                </div>

            )}

        </>

    )
}
