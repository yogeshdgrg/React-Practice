import product from '../../api/productData'
import Product from './Product'
const Cart = () => {
  return (
    <>
        <div>
            {
                product.map((item)=>{
                   return <Product key={item.id} title={item.title} description={item.description} category={item.category} price={item.price} images={item.images} />
                })
            }
        </div>
    </>
  )
}

export default Cart