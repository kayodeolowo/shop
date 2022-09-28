import React from 'react'
import {CartState} from "../Context/Context"
import SingleProduct from './SingleProduct';


const Home = () => {
  const {state: {products} } = CartState ();
  console.log(products);
  return (
    <div>
        <div> 
          {products.map((prod)=>{
            return <SingleProduct prod={prod} key={prod.id} />
          })}
        </div>
    </div>
  )
}

export default Home