
const CartColumns = () => {
  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-[200px,1fr,1fr,1fr,1fr] gap-x-8 mb-2 tracking-wide">
      <h1>Item</h1>
      <h1 className="hidden lg:block">Color</h1>
      <h1 className="hidden lg:block">Quantity</h1>
      <h1 className="hidden lg:block">Price</h1>
      <h1 className="hidden lg:block">Total</h1>
    </div>
    <hr className="border-1 border-green-950" />
    </>
  )
}

export default CartColumns