const ProductCard = ({ product }) => {
    return (
        <div className="flex w-[12rem] h-[12rem] relative group overflow-hidden cursor-pointer rounded-3xl">
            <img src={product.image} alt={product.name}
                 className="w-full h-full object-cover brightness-50
                            group-hover:scale-125 transition-transform duration-300" />

            <div className="flex flex-col items-center justify-center gap-[1rem]
                            h-full w-full absolute
                            text-text-dark text-center font-semibold">
                <p className="text-2xl">{product.name}</p>
                <p className="text-xl">$ {product.price}</p>
            </div>
        </div>
    );
}

export default ProductCard;