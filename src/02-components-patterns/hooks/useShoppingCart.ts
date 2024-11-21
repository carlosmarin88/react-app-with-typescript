import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

    const [shoppingCart, setsShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        //console.log('onProductCountChange', count, product);

        //console.log({count});

        setsShoppingCart(oldShoppingCart => {

            console.log(count);

             if (count === 0) {
                 delete oldShoppingCart[product.id];
                 return { ...oldShoppingCart };
                 
             }
             return {
                 ...oldShoppingCart,
                 [product.id]: { ...product, count }
             }
             
        });

    }

    return {
        onProductCountChange,
        shoppingCart
    }

}