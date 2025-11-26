export const validateProduct = (product, fileRequired = true) => {
    const errors = {};

    if (!product.name.trim()) {
        errors.name = "El nombre del producto es obligatorio.";
    }
    if (!product.price || product.price <= 0) {
        errors.price = "El producto debe ser mayor que cero.";
    }
    if (!product.description.trim()) {
        errors.description = "La descripción es obligatorio.";
    }
    if (!product.category.trim()) {
        errors.category = "El nombre del producto es obligatorio.";
    }
    if (fileRequired && !product.file) {
        errors.file = "Debes seleccionar una imagen.";
    }
    return errors;
};