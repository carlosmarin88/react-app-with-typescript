import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components/ProductCard"

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={product.title} />
                    <ProductCard.Buttons
                        counter={0}
                        increaseBy={function (value: number): void {
                            throw new Error("Function not implemented.")
                        }} isEmpty={false} />

                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title={product.title} />
                    <ProductButtons
                        counter={0}
                        increaseBy={function (value: number): void {
                            throw new Error("Function not implemented.")
                        }} isEmpty={false} />

                </ProductCard>
            </div>
        </div>
    )
}
