"use client";

import { useEffect, useState } from "react";
import { Form, Button, Alert, Image } from "react-bootstrap";
import axios from "axios";

// Função para validar a senha
const validarSenha = (password: string): string | null => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);

  if (password.length < minLength) {
    return `A senha deve ter pelo menos ${minLength} caracteres.`;
  }
  if (!hasUpperCase) {
    return "A senha deve conter pelo menos uma letra maiúscula.";
  }
  if (!hasLowerCase) {
    return "A senha deve conter pelo menos uma letra minúscula.";
  }
  if (!hasNumber) {
    return "A senha deve conter pelo menos um número.";
  }
  return null;
};

const CriarUsuario = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Usuário Restrito",
    profile_photo: null, // Armazena a imagem
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [mensagem, setMensagem] = useState("");
  const [roleUsuario, setRoleUsuario] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    const verificarPermissao = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get("http://localhost/myNewApi-1/public/api/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
	console.log(response.data);
        setRoleUsuario(response.data.role);

        if (response.data.role !== "Administrador") {
          setErro("🚫 Você não tem permissão para criar usuários!");
        }
      } catch (error) {
        setErro("Erro ao carregar permissões.");
      }
    };

    verificarPermissao();
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "profile_photo") {
      const file = e.target.files[0];
      setFormData({ ...formData, profile_photo: file });

      // Exibir a prévia da imagem
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const erroSenha = validarSenha(formData.password);
    if (erroSenha) {
      setMensagem(`🚫 ${erroSenha}`);
      return;
    }

    if (roleUsuario !== "Administrador") {
      setMensagem("🚫 Apenas administradores podem criar usuários.");
      return;
    }

    // Criar FormData para envio do arquivo
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("password", formData.password);
    formDataObj.append("role", formData.role);
    if (formData.profile_photo) {
      formDataObj.append("profile_photo", formData.profile_photo);
    }

    try {
      const response = await axios.post("http://localhost/myNewApi-1/public/api/users", formDataObj, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
	console.log(response.data);
      setMensagem("✅ Usuário criado com sucesso!");
      setFormData({ name: "", email: "", password: "", role: "Usuário Restrito", profile_photo: null });
      setPreview(null);
    } catch (error) {
      setMensagem("🚫 Erro ao criar usuário.");
    }
  };

  if (erro) {
    return <Alert variant="danger">{erro}</Alert>;
  }

  return (
    <div>
      <h2>🆕 Criar Usuário</h2>
      {mensagem && (
        <Alert variant={mensagem.startsWith("✅") ? "success" : "danger"}>{mensagem}</Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
              // Limpar mensagem de erro ao alterar a senha
              if (mensagem.startsWith("🚫") && mensagem !== "🚫 Apenas administradores podem criar usuários.") {
                setMensagem("");
              }
            }}
            required
          />
          <Form.Text className="text-muted">
            A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="role">
          <Form.Label>Tipo de Usuário</Form.Label>
          <Form.Control as="select" name="role" value={formData.role} onChange={handleChange} required>
            <option value="Administrador">Administrador</option>
            <option value="Editor">Editor</option>
            <option value="Colunista">Colunista</option>
            <option value="Usuário Restrito">Usuário Restrito</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="profile_photo">
          <Form.Label>Foto de Perfil</Form.Label>
          <Form.Control type="file" name="profile_photo" onChange={handleChange} accept="image/*" />
        </Form.Group>

        {preview && (
          <div className="text-center mt-2">
            <Image src={preview} alt="Prévia da Foto" roundedCircle width={100} />
          </div>
        )}

        <Button variant="success" type="submit" className="mt-3">
          Criar Usuário
        </Button>
      </Form>
    </div>
  );
};

export default CriarUsuario;
