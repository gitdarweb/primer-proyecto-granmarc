import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";

import "./ItemListContainer.css";


export const ItemListContainer = ({ titulo }) => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        getProducts(category)
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
    }, [category]);

    return (
        // ✅ Usamos 'container' para centrar y 'my-4' para margen vertical
        <section className="container my-4">
            <h1 className="text-center mb-4">{titulo}</h1> {/* Centramos el título */}

            {/* 🚨 ItemList es el que contendrá la estructura Row y Col */}
            <ItemList lista={products} />
        </section>
    );
};