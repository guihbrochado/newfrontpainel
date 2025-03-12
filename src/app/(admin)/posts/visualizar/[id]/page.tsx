"use client";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, Alert } from "react-bootstrap";
import axios from "axios";
import { useAuthContext } from "@/context/AuthContext";
import PageMetaData from "@/components/PageMetaData";

const VisualizarPost = () => {
  const { postId } = useParams();
  const { user, loading } = useAuthContext();
  const [post, setPost] = useState(null);
  const [error, setError] = useState("");
  //const [message, setMessage] = useState("");

  useEffect(() => {
    if (loading || !user) {
      setError("Usuário não autenticado.");
      return;
    }

    const fetchPost = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost/myNewApi-1/public/api/posts/${postId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Detalhes do post:", response.data);
        setPost(response.data.data); // Ajuste conforme a estrutura da resposta
      } catch (err) {
        console.error("Erro ao buscar post:", err);
        setError(err.response?.data?.message || "Erro ao carregar o post.");
      }
    };

    fetchPost();
  }, [postId, user, loading]);

  if (error) {
    return (
      <Row className="justify-content-center">
        <Col md={12} lg={12}>
          <Alert variant="danger">{error}</Alert>
        </Col>
      </Row>
    );
  }

  if (loading || !post) {
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
      <PageMetaData title={`Visualizar Post - ${post.title}`} />
      <Row className="justify-content-center">
        <Col md={12} lg={10}>
          <Card className="mb-4">
            <Card.Header>
              <h3>{post.title}</h3>
              <small>Autor: {post.user?.name || "Desconhecido"}</small>
            </Card.Header>
            <Card.Body>
              <p><strong>Categoria:</strong> {post.category?.name || "Sem categoria"}</p>
              <p><strong>Status:</strong> {post.status}</p>
              {post.image && (
                <img
                  src={`http://localhost/myNewApi-1/storage/${post.image}`}
                  alt={post.title}
                  style={{ maxWidth: "100%", marginBottom: "15px" }}
                />
              )}
              {post.video_url && (
                <p><strong>Video URL:</strong> <a href={post.video_url} target="_blank" rel="noopener noreferrer">{post.video_url}</a></p>
              )}
              {post.audio_url && (
                <p><strong>Audio URL:</strong> <a href={post.audio_url} target="_blank" rel="noopener noreferrer">{post.audio_url}</a></p>
              )}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </Card.Body>
            <Card.Footer>
              <small>Publicado em: {new Date(post.created_at).toLocaleDateString()}</small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default VisualizarPost;
