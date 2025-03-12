"use client";

import { useEffect, useState } from "react";
import { Table, Button, Alert, Nav } from "react-bootstrap";
import axios from "axios";
import { useAuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

interface Post {
  id?: string;
  title: string;
  status: string;
  user?: { name: string };
  category?: { name: string };
  category_id?: string;
}

const ListaPosts = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [archivedPosts, setArchivedPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Record<string, string>>({});
  const [erro, setErro] = useState<string | null>(null);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("publicado");

  useEffect(() => {
    if (!user) {
      setErro("Usuário não autenticado.");
      return;
    }
    if (user.role === "Usuário Restrito") {
      setErro("Você não tem permissão para acessar esta página.");
      return;
    }

    const fetchCategories = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "http://localhost/myNewApi-1/public/api/posts-categories",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const categoryMap = response.data.reduce(
          (acc: Record<string, string>, category: { id: string; name: string }) => {
            acc[category.id] = category.name;
            return acc;
          },
          {}
        );
        setCategories(categoryMap);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };

    const fetchPosts = async () => {
      const token = localStorage.getItem("token");
      let url = "http://localhost/myNewApi-1/public/api/posts";

      if (user.role === "Colunista") {
        url = "http://localhost/myNewApi-1/public/api/posts/mine";
      }

      try {
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Resposta da API:", response.data);
        // Ajuste para lidar com resposta paginada ou array direto
        const postsArray = response.data?.data?.data || response.data?.data || response.data || [];
        setPosts(postsArray);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setErro("Erro ao carregar posts.");
      }
    };

    const fetchArchivedPosts = async () => {
      if (user.role === "Colunista") return; // Colunistas não veem arquivados
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://localhost/myNewApi-1/public/api/posts/archived", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const archivedArray = response.data?.data?.data || response.data?.data || response.data || [];
        setArchivedPosts(archivedArray);
      } catch (error) {
        console.error("Erro ao buscar posts arquivados:", error);
        setErro("Erro ao carregar posts arquivados.");
      }
    };

    fetchCategories();
    fetchPosts();
    fetchArchivedPosts();
  }, [user]);

  const filterPosts = (status: string) => {
    if (status === "arquivado") return archivedPosts;
    return posts.filter((post) => post.status === status);
  };

  // Funções para ações dos botões
  const handleEdit = (postId: string) => {
    navigate(`/admin/posts/editar/${postId}`);
  };

  const handleDelete = async (postId: string) => {
    if (!confirm("Tem certeza que deseja excluir este post?")) return;
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://localhost/myNewApi-1/public/api/posts/${postId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPosts(posts.filter((post) => post.id !== postId));
      setMensagem("Post excluído com sucesso.");
    } catch (error) {
      console.error("Erro ao excluir post:", error);
      setErro("Erro ao excluir o post.");
    }
  };

  const handleApprove = async (postId: string) => {
    const token = localStorage.getItem("token");
    try {
      await axios.patch(
        `http://localhost/myNewApi-1/public/api/posts/${postId}/approve`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPosts(posts.map((post) => (post.id === postId ? { ...post, status: "publicado" } : post)));
      setMensagem("Post aprovado com sucesso.");
    } catch (error) {
      console.error("Erro ao aprovar post:", error);
      setErro("Erro ao aprovar o post.");
    }
  };

  const handleReject = async (postId: string) => {
    const token = localStorage.getItem("token");
    try {
      await axios.patch(
        `http://localhost/myNewApi-1/public/api/posts/${postId}/reject`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPosts(posts.map((post) => (post.id === postId ? { ...post, status: "rascunho" } : post)));
      setMensagem("Post rejeitado com sucesso.");
    } catch (error) {
      console.error("Erro ao rejeitar post:", error);
      setErro("Erro ao rejeitar o post.");
    }
  };

  const handleArchive = async (postId: string) => {
    if (!confirm("Tem certeza que deseja arquivar este post?")) return;
    const token = localStorage.getItem("token");
    try {
      const response = await axios.patch(
        `http://localhost/myNewApi-1/public/api/posts/${postId}/archive`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const archivedPost = response.data.data; // Pegar o post arquivado da resposta
      setPosts(posts.filter((post) => post.id !== postId)); // Remove da lista ativa
      if (user?.role !== "Colunista") {
        setArchivedPosts((prev) => [...prev, archivedPost]); // Adiciona à lista de arquivados
      }
      setMensagem("Post arquivado com sucesso.");
    } catch (error) {
      console.error("Erro ao arquivar post:", error);
      setErro("Erro ao arquivar o post.");
    }
  };

  if (erro) {
    return <Alert variant="danger">{erro}</Alert>;
  }

  return (
    <div>
      <h2>Lista de Posts</h2>

      {mensagem && <Alert variant="info">{mensagem}</Alert>}

      <Button variant="primary" className="mb-3" onClick={() => navigate("/admin/posts/criar")}>
        Criar Novo Post
      </Button>

      <Nav variant="tabs" className="mt-3">
        <Nav.Item>
          <Nav.Link active={activeTab === "publicado"} onClick={() => setActiveTab("publicado")}>
            Publicados
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={activeTab === "rascunho"} onClick={() => setActiveTab("rascunho")}>
            Rascunhos
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            active={activeTab === "aguardando_aprovacao"}
            onClick={() => setActiveTab("aguardando_aprovacao")}
          >
            Aguardando Aprovação
          </Nav.Link>
        </Nav.Item>
        {user?.role !== "Colunista" && (
          <Nav.Item>
            <Nav.Link active={activeTab === "arquivado"} onClick={() => setActiveTab("arquivado")}>
              Arquivados
            </Nav.Link>
          </Nav.Item>
        )}
      </Nav>

      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Título</th>
            <th>Status</th>
            <th>Autor</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filterPosts(activeTab).length > 0 ? (
            filterPosts(activeTab).map((post) => (
              <tr key={post.id || post.title}>
                <td>{post.title}</td>
                <td>{post.status}</td>
                <td>{post.user?.name || "Desconhecido"}</td>
                <td>
                  {post.category?.name || categories[post.category_id || ""] || "Sem categoria"}
                </td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEdit(post.id || "")}
                    disabled={!post.id}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="me-2"
                    onClick={() => handleDelete(post.id || "")}
                    disabled={!post.id}
                  >
                    Excluir
                  </Button>
                  {activeTab === "aguardando_aprovacao" && user?.role !== "Colunista" && (
                    <>
                      <Button
                        variant="success"
                        size="sm"
                        className="me-2"
                        onClick={() => handleApprove(post.id || "")}
                        disabled={!post.id}
                      >
                        Aprovar
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="me-2"
                        onClick={() => handleReject(post.id || "")}
                        disabled={!post.id}
                      >
                        Reprovar
                      </Button>
                    </>
                  )}
                  {activeTab !== "arquivado" && user?.role === "Administrador" && (
                    <Button
                      variant="info"
                      size="sm"
                      className="me-2"
                      onClick={() => handleArchive(post.id || "")}
                      disabled={!post.id}
                    >
                      Arquivar
                    </Button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                Nenhum post encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ListaPosts;