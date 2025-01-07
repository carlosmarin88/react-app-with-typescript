
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/";
import "../styles/custom-styles.css";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

const product = products[0];

export const ShoppingPage = () => {


    return (
        <>
            <div>
                <h1>Shopping Store</h1>
                <hr />
                <ProductCard
                    product={product}
                    className="bg-dark text-white"
                    key={product.id}
                    initialValues={{
                        count: 0,
                        maxCount: 10,
                    }}>

                    {
                        ({ reset, increaseBy, count, maxCount, isMaxCountReached }) => (
                            <>
                                <ProductImage className="custom-image" />
                                <ProductTitle className="text-bold" activeClass="active" />
                                <ProductButtons className="custom-buttons" />

                                <button onClick={reset}>Reset</button>
                                <button onClick={() => increaseBy(-2)}>-2</button>
                                {/* Si no se llega al isMaxCount, ocultar */}
                                {/* <button onClick={() => increaseBy(+2)}
                                    style={{ display: isMaxCountReached ? 'none' : 'inline-block' }}>+2</button> */}
                                {
                                    (!isMaxCountReached && <button onClick={()=> increaseBy(2)}> +2 </button>)
                                }

                                
                                <br />
                                <span>{count} - {maxCount}</span>
                                {/* {JSON.stringify(args, null, 3)} */}
                            </>
                        )
                    }
                </ProductCard>
            </div>
        </>
    )
}
