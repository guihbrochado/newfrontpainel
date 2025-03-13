import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface AuthContextType {
  user: any; // Substitua 'any' pelo tipo real do usuário, se possível
  loading: boolean;
  token?: string;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("🔍 Verificando token no localStorage (inicial):", token);

    if (token) {
      setLoading(true);
      fetchUser(token).finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      const token = localStorage.getItem("token");
      console.log("🔍 Verificando token no localStorage (navegação):", token);
      if (token && !user) {
        setLoading(true);
        fetchUser(token).finally(() => setLoading(false));
      }
    };
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, [user]);

  const fetchUser = async (token: string) => {
    try {
      console.log("🔹 Buscando usuário com token:", token);
      const response = await axios.get(
        `${API_URL}/user`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("✅ Resposta completa da API:", response.data);
      setUser(response.data);
    } catch (error) {
      console.error("❌ Erro ao buscar usuário - Detalhes:", error.response?.data || error.message);
      if (error.response?.status === 401) {
        console.warn("🔒 Token inválido. Redirecionando para login...");
        logout();
      } else {
        console.warn("🔧 Erro temporário ao buscar usuário. Mantendo sessão...");
      }
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      console.log("🔍 Enviando requisição para login:", { email, password });
      const response = await axios.post(
        `${API_URL}/login`,
        { email, password },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      console.log("✅ Resposta da API:", response.data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      await fetchUser(token);
      console.log("🔹 Login concluído. Usuário:", user);
      const waitForUser = async () => {
        let retries = 5;
        while (!user && retries > 0) {
          await new Promise((res) => setTimeout(res, 500));
          retries--;
        }
        if (user) {
          navigate("/dashboard/analytics", { replace: true });
        } else {
          console.warn("❌ Usuário não carregado após tentativas, redirecionando mesmo assim...");
          navigate("/dashboard/analytics", { replace: true });
        }
      };
      await waitForUser();
    } catch (error) {
      console.error("❌ Erro no login:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      console.log("🔹 Fazendo logout...");
      await axios.post(
        `${API_URL}/logout`,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
    } catch (error) {
      console.error("❌ Erro ao fazer logout", error);
    }
    localStorage.removeItem("token");
    setUser(null);
    navigate("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext deve ser usado dentro de um AuthProvider");
  }
  return context;
};
