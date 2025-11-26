export const ProductFormUI = ({
    product,
    errors,
    loading,
    onChange,
    onFileChange,
    onSubmit,
}) => {
    return (
        // 1. Contenedor principal para centrar el formulario y limitar el ancho
        // w-100 es para asegurar que tome el ancho completo en el contenedor padre.
        <section className="d-flex justify-content-center w-100">
            {/* 2. 'card' le da un marco, 'p-4' es padding, 'mt-5' es margen superior, 'shadow' le da sombra */}
            <form className="card p-4 mt-5 text-dark" style={{ maxWidth: '600px' }} onSubmit={onSubmit}>
                <h2 className="mb-4 text-center text-primary">Agregar Producto</h2>

                {/* Mostrar error general si existe */}
                {errors.general && <div className="alert alert-danger" role="alert">{errors.general}</div>}

                {/* CAMPO NOMBRE */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="form-control" // ⬅️ Clase Bootstrap
                        value={product.name}
                        onChange={onChange}
                        required
                    />
                    {errors.name && <p className="text-danger">{errors.name}</p>}
                </div>

                {/* CAMPO PRECIO */}
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Precio:</label>
                    <input
                        id="price"
                        type="number"
                        name="price"
                        className="form-control" // ⬅️ Clase Bootstrap
                        value={product.price}
                        onChange={onChange}
                        required
                    />
                    {errors.price && <p className="text-danger">{errors.price}</p>}
                </div>

                {/* CAMPO CATEGORÍA */}
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Categoría:</label>
                    <input
                        id="category"
                        type="text"
                        name="category"
                        className="form-control" // ⬅️ Clase Bootstrap
                        value={product.category}
                        onChange={onChange}
                        required
                    />
                    {errors.category && <p className="text-danger">{errors.category}</p>}
                </div>

                {/* CAMPO DESCRIPCIÓN */}
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descripción:</label>
                    <textarea
                        id="description"
                        name="description"
                        className="form-control" // ⬅️ Clase Bootstrap
                        value={product.description}
                        onChange={onChange}
                        required
                    ></textarea>
                    {errors.description && <p className="text-danger">{errors.description}</p>}
                </div>

                {/* CAMPO IMAGEN */}
                <div className="mb-3">
                    <label htmlFor="file" className="form-label">Imagen:</label>
                    <input
                        id="file"
                        type="file"
                        accept="image/*"
                        className="form-control" // ⬅️ Clase Bootstrap
                        onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
                    />
                    {errors.file && <p className="text-danger">{errors.file}</p>}
                </div>

                {/* BOTÓN DE ENVÍO */}
                <button
                    className="btn btn-primary mt-3" // ⬅️ Clases de botón principal
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Guardando..." : "Guardar"}
                </button>
            </form>
        </section>
    );
};