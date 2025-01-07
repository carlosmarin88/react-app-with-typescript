import { CSSProperties, ReactElement } from "react";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductImageProps } from "../components/ProductImage";
import { ProductButtonsProps } from "../components/ProductButtons";


export interface  onChangeArgs {
    product: Product,
    count: number,
}

export interface InitialValues {
    count?: number,
    maxCount?: number
}

export interface ProductCardProps {
    product: Product,
    //children?: ReactElement | ReactElement[],
    children: (args: ProductCardHandlers)=> JSX.Element,
    className?: string,
    style?: CSSProperties | undefined,
    onChange?: (args: onChangeArgs) => void,
    value?: number,
    initialValues?: InitialValues
}

export interface Product {
    id: string,
    title: string,
    img?: string,
}

export interface ProductContextProps {
    counter: number,
    isEmpty: boolean,
    product: Product,
    maxCount?: number,
    increaseBy: (value: number) => void,
    
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element,
}

export interface ProductInCart extends Product {
    count: number
}

export interface ProductCardHandlers {
    count: number,
    isMaxCountReached: boolean,
    maxCount?: number,
    product: Product,
    increaseBy: (value: number) => void,
    reset: () => void
}
