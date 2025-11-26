import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    //cambio logica de las funciones usando el count p/agregar cantidad.
    const exists = (id) => {
        const exist = cart.some((p) => p.id === id);
        return exist;
    };
    /*------------------------------------------------------------------*/
    /*             agregamos map y spread operator                      */
    /*------------------------------------------------------------------*/
    const addItem = (item) => {
        if (exists(item.id)) {
            //mapear el carrito y actualizar la cantidad
            const updatedCart = cart.map((prod) => {
                if (prod.id === item.id) {
                    //cuido que no se pierdan los demas atributos del producto
                    return { ...prod, quantity: prod.quantity + item.quantity };
                } else {
                    return prod;
                }
            });
            setCart(updatedCart);
            alert('Agregado al carrito');
        } else {
            setCart([...cart, item]);
            alert(`${item.name} agregado al carrito`);

        }
    };
    /*------------------------------------------------------------------*/
    /*             Eliminar producto con filter                     */
    /*------------------------------------------------------------------*/
    const deleteItem = (id) => {
        const filtered = cart.filter((p) => p.id !== id);
        setCart(filtered);
        alert('Producto eliminado del carrito');
    };
    /*------------------------------------------------------------------*/
    /*             Vaciar Carrito                     */
    /*------------------------------------------------------------------*/
    const clearCart = () => {
        setCart([]);
    };
    /*------------------------------------------------------------------*/
    /*             Calcular totalitems en el carrito                     */
    /*------------------------------------------------------------------*/
    const getTotalItems = () => {
        const totalItems = cart.reduce((acc, p) => acc + p.quantity, 0);
        return totalItems;
    };

    /*------------------------------------------------------------------*/
    /*             Calcular total                 */
    /*------------------------------------------------------------------*/
    const total = () => {
        const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

        return Math.round(total * 100) / 100;
    };
const checkout = () => {
  const ok = confirm("Desea finalizar la compra?");
  if (ok) {
    alert("Gracias por su compra");
    clearCart();
  }
};

    console.log(cart);
    const values = { cart, addItem, clearCart, getTotalItems, deleteItem, total, checkout };
    return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};