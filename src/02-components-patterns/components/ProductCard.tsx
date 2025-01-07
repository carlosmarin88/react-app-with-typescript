
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children,
    product,
    className,
    style,
    onChange,
    value,
    initialValues }: ProductCardProps) => {

    const { counter, isEmpty, increaseBy, maxCount, 
        isMaxCountReached, reset} = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            isEmpty,
            product,
            maxCount,
            increaseBy,
            
        }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,
                    increaseBy,
                    reset

                })}
            </div>
        </Provider>
    )
}