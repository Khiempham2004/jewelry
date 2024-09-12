import React from 'react';
import { useState } from 'react';
const CartItem = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "product 1", price: 100 },
        { id: 2, name: "product 2", price: 200 },
        { id: 3, name: "product 3", price: 300 },
    ]);
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredItems = cartItems.filter(item =>
        item.name.toLowerCase().includes()
    )
    
    return (
        <div>
            CartItem
        </div>
    );
}

export default CartItem;
