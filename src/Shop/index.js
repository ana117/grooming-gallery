import ProductList from "./ProductList";
import {products, duplicatedProducts} from "./data";
import {useTranslation} from "react-i18next";

const Shop = ({isHighlight}) => {
    const {t} = useTranslation();
    let productToDisplay = [...duplicatedProducts];
    if (isHighlight) {
        productToDisplay = products.slice(0, 3);
    }

    return (
        <div className={`p-[2rem] flex flex-col ${isHighlight && "lg:flex-row"} gap-[4rem]`}>
            <div className={`${isHighlight && "lg:w-1/3"} flex flex-col gap-[2rem]`}>
                <h1 className="heading">
                    {t("productsHeading")}
                </h1>
                <div className="flex flex-col gap-[1rem]">
                    <p className="paragraph">
                        {t("productsText")}

                    </p>
                </div>
            </div>

            <div className={`overflow-x-auto flex items-center`}>
                <ProductList products={productToDisplay} isHighlight={isHighlight}/>
            </div>
        </div>
    )
}

export default Shop;