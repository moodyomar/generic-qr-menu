import './MiniCart.css'
import React from 'react';
import { MdOutlineRemoveCircle } from 'react-icons/md';
import WhatsappContext from '../../contexts/WhatsappCart';


const MiniCart = () => { 

    const { memoizedValue } = React.useContext(WhatsappContext)

return(

    <div className="cart bubble-bottom-left">
    {memoizedValue.productsInWspCart.map(product =>
      <div className="product-row">
        <img src={product.picture} alt={product.name} width={30} height={30} />
        <p>{product.name}</p>
        <p>₪{product.price}</p>
        <button onClick={() => memoizedValue.removeFromWspCart(product.id)} className='remove-product-btn'>
          <MdOutlineRemoveCircle size={22} color={'red'} />
        </button>
      </div>
    )}
    <strong className="total">סך הכל ₪{memoizedValue.productsInWspCart.reduce((acc, curr) => acc + Number(curr.price), 0)}</strong>
  </div>

)
}

export default MiniCart