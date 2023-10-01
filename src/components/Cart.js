import { useSelector } from "react-redux"

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    return (
        <>
            <h1>Cart Items- {cartItems.length}</h1>
            <p>Lists--- {cartItems.join(',')}</p>
        </>
    )
}

export default Cart;