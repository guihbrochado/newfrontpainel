import { useContext, useEffect } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  const token = context?.token;

  useEffect(() => {
    if (!token) {
      console.warn("🔒 Acesso não autorizado. Redirecionando para /auth/login...");
      navigate("/auth/login", { replace: true });
    }
  }, [token, navigate]);

  return token ? (children || <Outlet />) : null;
};

export default ProtectedRoute;