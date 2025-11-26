import { useCartContext } from "../../context/CartContext/useCartContext";
import { Count } from "../Count/Count";
import { Item } from "../Item/Item";

export const ItemDetail = ({ detail }) => {
    const { addItem } = useCartContext();

    const handleAdd = (quantity) => {
        addItem({ ...detail, quantity });
    };
    //Si no reutilizo componente item y aca hacer una seccion totalmente nueva
    //no utilizo link de itemlist, no puedo reutilizar la navegacion a detalle
    //y me obligaria a hacer fetch de nuevo en este componente
    //por eso reutilizo Item y le agrego un boton
    return (
        <Item {...detail}>
            <Count btnText={"Agregar al carrito"} onConfirm={handleAdd} />
            {/*<button onClick={() => addItem(detail)}>Enviar al carrito</button>*/}
        </Item>
    );
};