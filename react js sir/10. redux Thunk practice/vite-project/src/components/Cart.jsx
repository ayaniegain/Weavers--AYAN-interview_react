import React from 'react'
import { useSelector } from 'react-redux';

function Cart() {
  const { cart } = useSelector((state) => state.product);


  console.log(cart)

  return (
    <div>Cart</div>
  )
}

export default Cart