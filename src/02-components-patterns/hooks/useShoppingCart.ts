import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {

    const [shoppingCart, setsShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        //console.log('onProductCountChange', count, product);

        //console.log({count});

        setsShoppingCart(oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };
            // agregar producto
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            //Borrar el producto
            delete oldShoppingCart[product.id];
            return { ...oldShoppingCart };



            /*
             if (count === 0) {
                 delete oldShoppingCart[product.id];
                 return { ...oldShoppingCart };
 
                 // otra manera
                 
                 //const { [produc t.id]: toDelete, ...rest } = oldShoppingCart;
                 //console.log({ toDelete });
 
                 //return { ...rest }
                 
             }
             return {
                 ...oldShoppingCart,
                 [product.id]: { ...product, count }
             }
             */
        });

    }

    return {
        onProductCountChange,
        shoppingCart
    }

}