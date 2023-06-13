
const CartColumns = () => {
  return (
    <>
    <div className="grid grid-cols-[200px,1fr,1fr,1fr,1fr] gap-x-8 mb-2 tracking-wide">
      <h1>Item</h1>
      <h1>Color</h1>
      <h1>Quantity</h1>
      <h1>Price</h1>
      <h1>Total</h1>
    </div>
    <hr className="border-1 border-green-950" />
    </>
  )
}

export default CartColumns