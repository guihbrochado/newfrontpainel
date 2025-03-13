import { useState, useEffect } from "react";
import ComponentContainerCard from "@/components/ComponentContainerCard";
import { Col, Row, Table, Modal, Button, Form, Alert } from "react-bootstrap";
import PageMetaData from "@/components/PageMetaData";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import axios from "axios";
import { useAuthContext } from "@/context/AuthContext";

const CategoriesPage = () => {
  const { user, loading } = useAuthContext();
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: "", color: "#000000" });
  const [editCategory, setEditCategory] = useState({ id: "", name: "", color: "#000000" });

  useEffect(() => {
    const fetchCategories = async () => {
      if (loading || !user) {
        setError("Usuário não autenticado.");
        return;
      }
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost/myNewApi-1/public/api/posts-categories", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log(response.data);

        if (response.data && Array.isArray(response.data)) {
          setCategories(response.data);
        } else {
          setError("Erro ao carregar categorias.");
        }
      } catch (err) {
        console.error("Erro ao buscar categorias:", err);
        setError("Erro ao carregar categorias.");
      }
    };
    fetchCategories();
  }, [user, loading]);

  const handleCreateCategory = async () => {
    if (!newCategory.name.trim()) {
      setError("O nome da categoria é obrigatório.");
      return;
    }
  
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost/myNewApi-1/public/api/posts-categories",
        { name: newCategory.name, color: newCategory.color },
        { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } }
      );
      console.log(response.data);
      setMessage("Categoria criada com sucesso!");
      setShowCreateModal(false);
      setNewCategory({ name: "", color: "#000000" });
  
      const updatedCategories = await axios.get("http://localhost/myNewApi-1/public/api/posts-categories", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(updatedCategories.data);
    } catch (err) {
      console.error("Erro ao criar categoria:", err);
      if (err.response?.status === 422) {
        setError(err.response.data.message || "Erro ao criar categoria: dados inválidos.");
      } else {
        setError("Erro ao criar categoria.");
      }
    }
  };

  const handleEditCategory = async () => {
    if (!editCategory.name.trim()) {
      setError("O nome da categoria é obrigatório.");
      return;
    }
  
    console.log("Dados enviados para edição:", editCategory);
  
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `http://localhost/myNewApi-1/public/api/posts-categories/${editCategory.id}`,
        { name: editCategory.name, color: editCategory.color },
        { headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } }
      );
      console.log(response.data);
      setMessage("Categoria atualizada com sucesso!");
      setShowEditModal(false);
  
      const updatedCategories = await axios.get("http://localhost/myNewApi-1/public/api/posts-categories", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCategories(updatedCategories.data);
    } catch (err) {
      console.error("Erro ao editar categoria:", err);
      if (err.response?.status === 422) {
        setError(err.response.data.message || "Erro ao editar categoria: dados inválidos.");
      } else {
        setError("Erro ao editar categoria.");
      }
    }
  };

  const openEditModal = (category) => {
    setEditCategory({ id: category.id, name: category.name, color: category.color || "#000000" });
    setShowEditModal(true);
  };

  const handleDeleteCategory = async (categoryId) => {
    if (!confirm("Tem certeza que deseja excluir esta categoria?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost/myNewApi-1/public/api/posts-categories/${categoryId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage("Categoria excluída com sucesso!");
      setCategories(categories.filter((category) => category.id !== categoryId));
    } catch (err) {
      console.error("Erro ao excluir categoria:", err);
      setError("Erro ao excluir categoria.");
    }
  };

  if (error) {
    return (
      <Row className="justify-content-center">
        <Col md={12} lg={12}>
          <Alert variant="danger">{error}</Alert>
        </Col>
      </Row>
    );
  }

  if (loading) {
    return (
      <Row className="justify-content-center">
        <Col md={12} lg={12}>
          <div>Carregando...</div>
        </Col>
      </Row>
    );
  }

  return (
    <>
      <PageMetaData title="Categorias de Posts" />
      <Row className="justify-content-center">
        <Col md={12} lg={12}>
          <ComponentContainerCard title="Categorias de Posts">
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}

            <div className="d-flex justify-content-end mb-3">
              <Button variant="primary" onClick={() => setShowCreateModal(true)}>
                <IconifyIcon icon="la:plus" className="me-1" /> Adicionar Categoria
              </Button>
            </div>

            <Table striped className="table mb-0">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Título</th>
                  <th>Cor</th>
                  <th>Quantidade de Posts</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.name}</td>
                    <td>
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          backgroundColor: category.color || "#000000",
                          border: "1px solid #ccc",
                          display: "inline-block",
                        }}
                      ></div>{" "}
                      {category.color}
                    </td>
                    <td>{category.posts ? category.posts.length : 0}</td>
                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => openEditModal(category)}
                      >
                        <IconifyIcon icon="la:edit" />
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteCategory(category.id)}
                      >
                        <IconifyIcon icon="la:trash" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ComponentContainerCard>
        </Col>
      </Row>

      {/* 🔹 Modal de Criação de Categoria */}
      <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Criar Nova Categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="categoryName">
              <Form.Label>Nome da Categoria</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome da categoria"
                value={newCategory.name}
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="categoryColor">
              <Form.Label>Cor da Categoria</Form.Label>
              <Form.Control
                type="color"
                value={newCategory.color}
                onChange={(e) => setNewCategory({ ...newCategory, color: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCreateModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleCreateCategory}>
            Criar Categoria
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 🔹 Modal de Edição de Categoria */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="editCategoryName">
              <Form.Label>Nome da Categoria</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome da categoria"
                value={editCategory.name}
                onChange={(e) => setEditCategory({ ...editCategory, name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editCategoryColor">
              <Form.Label>Cor da Categoria</Form.Label>
              <Form.Control
                type="color"
                value={editCategory.color}
                onChange={(e) => setEditCategory({ ...editCategory, color: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleEditCategory}>
            Salvar Alterações
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CategoriesPage;