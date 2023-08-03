import ProductList from "./ProductList";
import products from "./data";

const Shop = ({isHighlight}) => {
    let productToDisplay = [...products];
    if (isHighlight) {
        productToDisplay = products.slice(0, 3);
    }

    return (
        <div className="p-[2rem] flex flex-col lg:flex-row gap-[4rem]">
            <div className="lg:w-1/3 flex flex-col gap-[2rem]">
                <h1 className="heading">
                    Discover Exceptional Grooming Essentials
                </h1>
                <div className="flex flex-col gap-[1rem]">
                    <p className="paragraph">
                        Discover more than just products – immerse yourself in a lifestyle of sophistication, confidence,
                        and timeless charm.
                    </p>
                    <p className="paragraph">
                        Browse our selection and take a piece of exceptional craftsmanship home with you.
                    </p>
                </div>
            </div>

            <div className="overflow-x-auto flex items-center">
                <ProductList products={productToDisplay} isHighlight={isHighlight} />
            </div>
        </div>
)
}

export default Shop;