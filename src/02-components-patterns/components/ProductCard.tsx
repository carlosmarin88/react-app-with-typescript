
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product, className, style, onChange, value }: ProductCardProps) => {

    const { counter, isEmpty, increaseBy } = useProduct({onChange, product, value});

    return (
        <Provider value={{
            counter,
            isEmpty,
            product,
            increaseBy,
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    )
}