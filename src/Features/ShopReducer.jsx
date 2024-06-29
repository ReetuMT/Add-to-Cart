const ShopReducer = (state, action) => {
    switch (action.type) {
        case "Add":
            const existingProductIndex = state.findIndex(item => item.id === action.product.id);
            if (existingProductIndex !== -1) {
                return state.map(item =>
                    item.id === action.product.id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...state, { ...action.product, qty: 1 }];
        case "Remove":
            return state.filter(item => item.id !== action.id);
        case "Increase":
            return state.map(item =>
                item.id === action.id ? { ...item, qty: item.qty + 1 } : item
            );
        case "Decrease":
            return state.map(item =>
                item.id === action.id ? { ...item, qty: item.qty - 1 } : item
            );
        default:
            return state;
    }
};

export default ShopReducer;
