import React, { useContext } from 'react';
import StoreContext from '../StoreContext';

function Footer() {
    const { store } = useContext(StoreContext);
    console.log(store);
    return store.getCompletedLen;
}

export default Footer;