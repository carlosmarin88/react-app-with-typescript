
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/";
import "../styles/custom-styles.css";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";


export const ShoppingPage = () => {

    const { onProductCountChange, shoppingCart } = useShoppingCart();

    return (
        <>
            <div>
                <h1>Shopping Store</h1>
                <hr />
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>

                    {
                        products.map(prod => (
                            <ProductCard
                                product={prod}
                                className="bg-dark text-white"
                                key={prod.id}
                                value={shoppingCart[prod.id]?.count ?? 0}
                                onChange={(event) => onProductCountChange(event)}>
                                <ProductImage className="custom-image" />
                                <ProductTitle className="text-bold" activeClass="active" />
                                <ProductButtons className="custom-buttons" />
                            </ProductCard>
                        ))
                    }
                </div>

                <div className="shopping-cart">

                    {
                        Object.entries(shoppingCart).map(([key, product]) =>
                            <ProductCard
                                product={product}
                                key={key}
                                className="bg-dark text-white"
                                style={{ width: '100px' }}
                                value={product.count}
                                onChange={(event) => onProductCountChange(event)} >
                                <ProductImage className="custom-image" />
                                <ProductButtons className="custom-buttons" style={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }} />
                            </ProductCard>
                        )
                    }

                </div>
                {/* <div>
                    <code>
                        {JSON.stringify(shoppingCart, null, 5)}
                    </code>
                </div> */}
            </div>
        </>
    )
}
