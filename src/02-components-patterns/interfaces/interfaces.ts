import { CSSProperties, ReactElement } from "react";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductImageProps } from "../components/ProductImage";
import { ProductButtonsProps } from "../components/ProductButtons";


export interface  onChangeArgs {
    product: Product,
    count: number,
}
export interface ProductCardProps {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: CSSProperties | undefined,
    onChange?: (args: onChangeArgs) => void,
    value?: number
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

