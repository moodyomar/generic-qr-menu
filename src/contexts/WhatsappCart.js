import {createContext,useCallback,useMemo,useState} from 'react';

const WhatsappContext = createContext();
export const WhatsappProvider = ({children}) => {

    const [productsInWspCart,setProductsInWspCart] = useState([]);

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
    [productsInWspCart, addToWspCart, removeFromWspCart]
  );

  return <WhatsappContext.Provider value={{
    memoizedValue
    }}>
{children}
    </WhatsappContext.Provider>
}

export default WhatsappContext