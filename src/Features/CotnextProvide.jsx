import { Children, createContext,useReducer } from "react"
import ShopReducer from "./ShopReducer"


export const CartContext = createContext()
const ContextProvider=({children})=>{

    const [cart,dispatch]=useReducer(ShopReducer,[])
    return(
        
        <CartContext.Provider value={{cart,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}
export default ContextProvider