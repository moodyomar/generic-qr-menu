import {createContext,useCallback,useMemo,useState} from 'react';

const WhatsappContext = createContext();
export const WhatsappProvider = ({children}) => {

    const [productsInWspCart,setProductsInWspCart] = useState([]);

// funcs

// const addToWspCart = (product) => {
//     setProductsInWspCart(productsInWspCart => [...productsInWspCart, product]);
// }

const addToWspCart = useCallback(
    (product) => {
      setProductsInWspCart((productsInWspCart) => [...productsInWspCart, product,]);
    },
    [setProductsInWspCart]
  );
  
  const removeFromWspCart = useCallback(
    (productId) => {
      setProductsInWspCart((productsInWspCart) =>
        productsInWspCart.filter((product) => product.id !== productId)
      );
    },
    [setProductsInWspCart]
  );
  

  const memoizedValue = useMemo(
    () => ({
      productsInWspCart,
      addToWspCart,
      removeFromWspCart
    }),
    [productsInWspCart, addToWspCart]
  );

  return <WhatsappContext.Provider value={{
    memoizedValue
    }}>
{children}
    </WhatsappContext.Provider>
}

export default WhatsappContext