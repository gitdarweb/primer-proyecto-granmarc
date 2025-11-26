import { Link } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemList = ({ lista }) => {

    return (
        // 1. Contenedor Row: Define la fila de la cuadrícula.
        // row-cols-1: 1 columna en móvil (xs)
        // row-cols-md-3: 3 columnas en tabletas (md)
        // g-4: Espacio (gap) de 4 entre las tarjetas
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {lista.length ? (
                lista.map((prod) => (
                    // 2. Contenedor Columna: Define el ancho de cada tarjeta.
                    // Usamos una columna por cada item mapeado.
                    <div className="col" key={prod.id}>
                        <Link
                            to={`/detail/${prod.id}`}
                            // Eliminamos la decoración del enlace para que la tarjeta se vea limpia
                            className="text-decoration-none"
                        >
                            <Item {...prod} />
                        </Link>
                    </div>
                ))
            ) : (
                <p className="text-center w-100">No hay productos</p>
            )}
        </div>
    );
};