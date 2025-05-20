import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, loadCartData } from '../redux/cartSlice'

function Cart() {
    const { cart } = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    async function loadData() {
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/posts')
            let result = await res.json()
            dispatch(loadCartData(result))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadData()
    }, [dispatch])

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Cart</h1>
            <div className="space-y-4">
                {cart && cart.map((e) => (
                    <div
                        key={e.id}
                        className="bg-white shadow rounded-lg p-4 flex items-center justify-between"
                    >
                        <h2 className="text-lg font-semibold text-gray-800">{e.title}</h2>
                        <button
                            onClick={() => dispatch(deleteCart(e.id))}
                            className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart
