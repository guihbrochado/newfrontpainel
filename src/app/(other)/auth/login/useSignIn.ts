import { useForm } from "react-hook-form";
import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";

interface LoginFormData {
  email: string;
  password: string;
}

const useSignIn = () => {
  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: { email: "", password: "" },
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuthContext();

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      await login(data.email, data.password);
    } catch (error: any) {
      console.error("❌ Erro na requisição:", error);
      alert(error.response?.data?.message || "Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  });

  return { control, login: onSubmit, loading };
};

export default useSignIn;