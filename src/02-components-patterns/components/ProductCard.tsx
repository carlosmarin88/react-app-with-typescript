
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';
import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement, useContext } from 'react';

interface Props {
    product: Product,
    children?: ReactElement | ReactElement[]
}

interface Product {
    id: string,
    title: string,
    img?: string,
}

interface ProductButtonsProps {
    counter: number,
    increaseBy: (value: number) => void,
    isEmpty: boolean
}

interface ProductContextProps {
    counter: number,
    isEmpty: boolean,
    product: Product,
    increaseBy: (value: number) => void,
}

const productContext = createContext({} as ProductContextProps);
const { Provider } = productContext;

export const ProductImage = ({ img = "" }) => {
    return (
        <img className={styles.productImg} src={img ? img : noImage} alt="Product image" />
    );
}

export const ProductTitle = ({ title }: { title: string }) => {
    return (
        <span className={styles.productDescription}>{title}</span>
    );
}

export const ProductButtons = ({ counter, increaseBy, isEmpty }: ProductButtonsProps) => {


    //const { increaseBy, counter } = useContext(productContext);

    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)} disabled={isEmpty}>
                -
            </button>
            <div className={styles.countLabel}>
                {counter}
            </div>
            <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
                +
            </button>
        </div>
    );
}

export const ProductCard = ({ children, product }: Props) => {

    const { counter, isEmpty, increaseBy } = useProduct();

    return (
        <Provider value={{
            counter,
            isEmpty,
            product,
            increaseBy,
        }}>
            <div className={styles.productCard}>
                {children}
                {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy} isEmpty={isEmpty} /> */}
            </div>
        </Provider>
    )
}

ProductCard.Image = ProductImage
ProductCard.Title = ProductTitle
ProductCard.Buttons = ProductButtons