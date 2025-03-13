"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { Table, Button, Alert, Modal, Form } from "react-bootstrap";
import axios from "axios";

interface Usuario {
  id: number;
  name: string;
  email: string;
  role: string;
  roles: { name: string }[];
}

interface UsuarioEdit {
  id: string;
  name: string;
  email: string;
  role: string;
  password: string;
}

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [role, setRole] = useState<string>("");
  const [erro, setErro] = useState<string | null>("");
  const [mensagem, setMensagem] = useState<string | null>("");
  const [showModal, setShowModal] = useState(false);
  const [usuarioEdit, setUsuarioEdit] = useState<UsuarioEdit>({
    id: "",
    name: "",
    email: "",
    role: "",
    password: "",
  });

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUsuarios = async () => {
      const token = localStorage.getItem("token");

      try {
        const userResponse = await axios.get(
          `${API_URL}/user`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setRole(userResponse.data.role);

        if (userResponse.data.role !== "Administrador") {
          setErro("Você não tem permissão para acessar esta página.");
          return;
        }

        const response = await axios.get(
          `${API_URL}/users`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUsuarios(response.data);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        setErro("Erro ao carregar usuários.");
      }
    };

    fetchUsuarios();
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm("Tem certeza que deseja excluir este usuário?")) return;

    const token = localStorage.getItem("token");
    try {
      await axios.delete(
        `${API_URL}/users/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMensagem("Usuário excluído com sucesso!");
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
      setErro("Erro ao excluir usuário.");
    }
  };

  const handleEdit = (usuario: Usuario) => {
    setUsuarioEdit({ ...usuario, password: "", id: usuario.id.toString() });
    setShowModal(true);
  };

  const handleSaveEdit = async () => {
    const token = localStorage.getItem("token");
    const updateData = {
      name: usuarioEdit.name,
      email: usuarioEdit.email,
      role: usuarioEdit.role,
    };

    if (usuarioEdit.password) {
      updateData["password"] = usuarioEdit.password;
    }

    try {
      await axios.put(
       `${API_URL}/users/${usuarioEdit.id}`,
        updateData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMensagem("Usuário atualizado com sucesso!");
      setUsuarios(
        usuarios.map((user) =>
          user.id === parseInt(usuarioEdit.id) ? { ...user, ...updateData } : user
        )
      );
      setShowModal(false);
    } catch (error) {
      console.error("Erro ao editar usuário:", error);
      setErro("Erro ao editar usuário.");
    }
  };

  if (erro) {
    return <Alert variant="danger">{erro}</Alert>;
  }

  return (
    <div>
      <h2>Lista de Usuários</h2>

      {mensagem && <Alert variant="info">{mensagem}</Alert>}

      {role === "Administrador" && (
        <Button variant="primary" href="/admin/usuarios/criar">
          Criar Novo Usuário
        </Button>
      )}

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Role</th>
            {role === "Administrador" && <th>Ações</th>}
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.name}</td>
              <td>{usuario.email}</td>
              <td>{usuario.roles.length > 0 ? usuario.roles[0].name : "Sem função"}</td>
              {role === "Administrador" && (
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(usuario)}
                  >
                    Editar
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(usuario.id)}>
                    Excluir
                  </Button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuário</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="editName">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={usuarioEdit.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUsuarioEdit({ ...usuarioEdit, name: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group controlId="editEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={usuarioEdit.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUsuarioEdit({ ...usuarioEdit, email: e.target.value })
                }
                required
              />
            </Form.Group>

            <Form.Group controlId="editRole">
              <Form.Label>Tipo de Usuário</Form.Label>
              <Form.Control
                as="select"
                name="role"
                value={usuarioEdit.role}
                onChange={(e) =>
                  setUsuarioEdit({ ...usuarioEdit, role: (e.target as any).value })
                }
                required
              >
                <option value="Administrador">Administrador</option>
                <option value="Editor">Editor</option>
                <option value="Colunista">Colunista</option>
                <option value="Usuário Restrito">Usuário Restrito</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="editPassword">
              <Form.Label>Nova Senha (Opcional)</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Deixe em branco para não alterar"
                value={usuarioEdit.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setUsuarioEdit({ ...usuarioEdit, password: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleSaveEdit}>
            Salvar Alterações
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ListaUsuarios;
