"use client";

import { useEffect, useState } from "react";
import { Table, Button, Alert, Nav } from "react-bootstrap";
import axios from "axios";
import { useAuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

interface Post {
  title: string;
  status: string;
  user?: { name: string };
  category?: { name: string };
  category_id?: string; // ID da categoria, caso precise buscar manualmente
}

const ListaPosts = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);
  const [archivedPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Record<string, string>>({});
  const [erro, setErro] = useState<string | null>(null);
  const [mensagem] = useState<string | null>(null);
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
        const postsArray = response.data?.data?.data || response.data?.data || [];
        setPosts(postsArray);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setErro("Erro ao carregar posts.");
      }
    };

    fetchCategories();
    fetchPosts();
  }, [user]);

  const filterPosts = (status: string) => {
    if (status === "arquivado") return archivedPosts;
    return posts.filter((post) => post.status === status);
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
          </tr>
        </thead>
        <tbody>
          {filterPosts(activeTab).length > 0 ? (
            filterPosts(activeTab).map((post) => (
              <tr key={post.title}>
                <td>{post.title}</td>
                <td>{post.status}</td>
                <td>{post.user?.name || "Desconhecido"}</td>
                <td>
                  {post.category?.name || categories[post.category_id || ""] || "Sem categoria"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center">
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
