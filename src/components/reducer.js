export  const reducer = (state,action) => {
    if(action.type === "ADD_TO_CART"){
        return{
            ...state,
            cartItem:state.cartItem + 1
        }
    }
    return state;
}