import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const useAuthContext = () => {
  // Aquí iría la lógica para usar el contexto de autenticación
    return useContext(AuthContext);
};