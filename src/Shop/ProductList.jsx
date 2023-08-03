import ProductCard from "../components/ProductCard";
import {Link} from "react-router-dom";

const ProductList = ({products, isHighlight}) => {
    return (
        <div className={`flex gap-[2rem] justify-center ${!isHighlight && "flex-wrap"}`}>
            {products.map((product) => (
                <div key={product.id}>
                    <ProductCard product={product}/>
                </div>
            ))}

            {isHighlight &&
                <Link to="/products"
                    className="flex items-center justify-center bg-accent-dark hover:bg-accent
                               w-[12rem] h-[12rem] cursor-pointer rounded-3xl
                               text-text text-center font-semibold">
                    <p className="text-2xl">View All</p>
                </Link>
            }
        </div>
    );
}

export default ProductList;