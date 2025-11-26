// src/services/products.js (CÓDIGO CORREGIDO)

const BASE_URL = 'https://691008b745e65ab24ac55c2a.mockapi.io/products';

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });

    if (!res.ok) {
        throw new Error('Error al crear el producto');
    }
    const result = await res.json();
    return result;
};

export const getProducts = async (category) => {
    let url = BASE_URL;
    if (category) {
        // CORRECCIÓN: Usar backticks (`) para inyectar variables en la URL
        url = `${BASE_URL}?category=${category}`;
    }
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Error al obtener los productos');
    }
    const results = await res.json();
    return results;
}

export const getProductById = async (id) => {
    // CORRECCIÓN: Usar backticks (`) para inyectar la variable id en la URL
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) {
        throw new Error('Error al obtener el producto');
    }
    return await res.json();
};