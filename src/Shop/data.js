import {CompleteKitImage, HairKitImage, HairSerumImage, HairWaxImage, MinimalKitImage} from "../assets/image";

const products = [
    {
        id: 1,
        name: "Complete Kit",
        price: 150,
        image: CompleteKitImage
    },
    {
        id: 2,
        name: "Hair Kit",
        price: 75,
        image: HairKitImage
    },
    {
        id: 3,
        name: "Minimal Kit",
        price: 50,
        image: MinimalKitImage,
    },
    {
        id: 4,
        name: "Hair Serum",
        price: 50,
        image: HairSerumImage
    },
    {
        id: 5,
        name: "Hair Wax",
        price: 25,
        image: HairWaxImage
    }
];

const duplicatedProducts = [];
for (let i = 0; i < 3; i++) {
    products.forEach((product, j) => duplicatedProducts.push({
        ...product,
        id: i * products.length + j + 1
    }));
}

export {products, duplicatedProducts}