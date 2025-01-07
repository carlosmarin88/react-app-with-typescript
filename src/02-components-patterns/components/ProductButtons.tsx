import { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface ProductButtonsProps {
    className?: string,
    style?: CSSProperties | undefined
}

export const ProductButtons = ({ className, style }: ProductButtonsProps) => {

    
    const { increaseBy, counter, isEmpty, maxCount } = useContext(ProductContext);

    //TODO: isMaxReached = useCallback, [count, maxCount ]
    //TRUE si el count === maxCount y FALSE sino lo es
    const isMaxReached = useCallback(
        () => !!maxCount && counter === maxCount
        , [counter, maxCount],
    );



    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)} disabled={isEmpty}>
                -
            </button>
            <div className={styles.countLabel}>
                {counter}
            </div>
            <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} onClick={() => {
                increaseBy(1);
            }}>
                +
            </button>
        </div>
    );
}