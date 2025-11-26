import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { useNavigate, Navigate } from "react-router-dom";

export const Login = () => {
    const [userForm, setUserForm] = useState({ name: "", password: "" });
    const { user, login } = useAuthContext();
    const navigate = useNavigate();

    if (user) {
        return <Navigate to="/admin/alta-productos" replace />;
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm({ ...userForm, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login(userForm.name, userForm.password);
        if (success) {
            navigate("/admin/alta-productos");
        } else {
            // NOTA: Reemplazar alert() con un modal o mensaje en el futuro
            alert("Credenciales incorrectas");
            setUserForm({ name: "", password: "" });
        }
    };

    return (
        // 1. Contenedor principal centrado, con margen superior
        <div className="container d-flex justify-content-center mt-5">
            {/* 2. Formulario dentro de una tarjeta (card) para un aspecto limpio */}
            <form onSubmit={handleSubmit} className="card p-4 text-dark" style={{ maxWidth: '400px', width: '100%' }}>

                <h2 className="mb-4 text-center text-primary">Iniciar Sesión</h2>

                {/* GRUPO DE USUARIO */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Usuario:</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="form-control" // ⬅️ Clase Bootstrap
                        value={userForm.name}
                        onChange={handleChange}
                    />
                </div>

                {/* GRUPO DE CONTRASEÑA */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña:</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="form-control" // ⬅️ Clase Bootstrap
                        value={userForm.password}
                        onChange={handleChange}
                    />
                </div>

                {/* BOTÓN DE ENVÍO */}
                <button type="submit" className="btn btn-primary mt-3">Iniciar sesión</button>
            </form>
        </div>
    );
};