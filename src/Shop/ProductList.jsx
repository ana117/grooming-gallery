import ProductCard from "../components/ProductCard";

const ProductList = ({products, isHighlight}) => {
    return (
        <div className="flex gap-[2rem]">
            {products.map((product) => (
                <div key={product.id}>
                    <ProductCard product={product}/>
                </div>
            ))}

            {isHighlight &&
                <div
                    className="flex items-center justify-center bg-accent-dark hover:bg-accent
                               w-[12rem] h-[12rem] cursor-pointer rounded-3xl
                               text-text text-center font-semibold">
                    <p className="text-2xl">View All</p>
                </div>
            }
        </div>
    );
}

export default ProductList;