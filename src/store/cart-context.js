import React from 'react';

// Passed value to createContext is not used but provides better auto completion if the values are provided

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
});

export default CartContext;