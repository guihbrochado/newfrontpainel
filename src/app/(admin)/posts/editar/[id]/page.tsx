"use client";

import { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import { Form, Button, Alert, Col, Row, Modal } from "react-bootstrap";
import ComponentContainerCard from "@/components/ComponentContainerCard";
import PageMetaData from "@/components/PageMetaData";
import { EditorRef, EmailEditor, EmailEditorProps } from "react-email-editor";
import axios, { AxiosError } from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";

interface JSONTemplate {
  counters: Record<string, any>;
  body: {
    id: string;
    rows: any[];
    headers: any[];
    footers: any[];
    values: Record<string, any>;
  };
}

interface Category {
  id: string;
  name: string;
}

interface Post {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  category_id: string;
  status: string;
  video_url: string;
  audio_url: string;
  tags: string;
  schedule_date: string;
  image: string;
  design: JSONTemplate;
}

const EditarPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const { user, loading } = useAuthContext();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [status, setStatus] = useState("rascunho");
  const [scheduleDate, setScheduleDate] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [tags, setTags] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [design, setDesign] = useState<JSONTemplate | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [previewHtml, setPreviewHtml] = useState("");

  const emailEditorRef = useRef<EditorRef>(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (loading || !user) {
      setError("Usuário não autenticado.");
      return;
    }

    if (!postId) {
      setError("ID do post não fornecido.");
      return;
    }

    const fetchPost = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_URL}/posts/${postId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const post: Post = response.data.data;
        console.log("Dados recebidos do post:", post);

        setTitle(post.title || "");
        setSubtitle(post.subtitle || "");
        setVideoUrl(post.video_url || "");
        setAudioUrl(post.audio_url || "");
        setCategoryId(post.category_id || "");
        setStatus(post.status || "rascunho");
        setScheduleDate(
          post.schedule_date ? new Date(post.schedule_date).toISOString().slice(0, 16) : ""
        );
        setTags(post.tags || "");

        const defaultDesign = {
          counters: {},
          body: {
            id: "default",
            rows: [],
            headers: [],
            footers: [],
            values: {},
          },
        };
        const postDesign = post.design || defaultDesign;
        setDesign(postDesign);

        if (post.content) {
          const designWithContent = {
            ...postDesign,
            body: {
              ...postDesign.body,
              rows: postDesign.body.rows.length > 0
                ? postDesign.body.rows
                : [
                    {
                      cells: [1],
                      columns: [
                        {
                          contents: [
                            {
                              type: "text",
                              values: {
                                text: post.content,
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
            },
          };
          if (emailEditorRef.current?.editor) {
            emailEditorRef.current.editor.loadDesign(designWithContent);
          }
        }
      } catch (err) {
        const error = err as AxiosError<{ message?: string }>;
        setError(error.response?.data?.message || "Erro ao carregar o post.");
      }
    };

    const fetchCategories = async () => {
      setLoadingCategories(true);
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_URL}/posts-categories`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCategories(response.data);
      } catch (err) {
        const error = err as AxiosError<{ message?: string }>;
        setError(error.response?.data?.message || "Erro ao carregar categorias.");
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchPost();
    fetchCategories();
  }, [postId, user, loading]);

  const exportHtml = (callback: (html: string, design?: JSONTemplate) => void) => {
    const unlayer = emailEditorRef.current?.editor;
    if (!unlayer) {
      callback("");
      return;
    }
    unlayer.exportHtml((data) => {
      const { html, design } = data;
      callback(html, design);
    });
  };

  const onReady: EmailEditorProps["onReady"] = (unlayer) => {
    if (design) {
      unlayer.loadDesign(design);
    }
  };

  const handlePreviewFullScreen = () => {
    exportHtml((html) => {
      setPreviewHtml(html);
      setShowPreview(true);
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    exportHtml(async (html, exportedDesign) => {
      if (!title || !html || !categoryId || !status) {
        setError("Preencha todos os campos obrigatórios: Título, Conteúdo, Categoria e Status.");
        return;
      }

      // Dados de texto como JSON
      const data = {
        title,
        subtitle: subtitle || undefined,
        content: html,
        category_id: categoryId,
        status,
        video_url: videoUrl || undefined,
        audio_url: audioUrl || undefined,
        tags: tags || undefined,
        schedule_date: scheduleDate || undefined,
        design: exportedDesign ? JSON.stringify(exportedDesign) : undefined,
      };

      try {
        const token = localStorage.getItem("token");

        // Primeiro, envia os dados de texto (JSON)
        const textResponse = await axios.put(`${API_URL}/posts/${postId}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        // Se houver imagem, faz um segundo request com FormData
        if (image) {
          const formData = new FormData();
          formData.append("image", image);
          await axios.post(`${API_URL}/posts/${postId}/upload-image`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          });
        }

        setSuccess("Post atualizado com sucesso!");
        setDesign(exportedDesign || design);
        setTimeout(() => navigate("/admin/posts"), 2000);
      } catch (err) {
        const error = err as AxiosError<{ message?: string; errors?: Record<string, string[]> }>;
        const errorMessage = error.response?.data?.message || "Erro ao atualizar o post.";
        const validationErrors = error.response?.data?.errors
          ? Object.entries(error.response.data.errors)
              .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
              .join("; ")
          : "";
        setError(`${errorMessage}${validationErrors ? " - " + validationErrors : ""}`);
      }
    });
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
      <PageMetaData title="Editar Post" />
      <Row className="justify-content-center">
        <Col md={12} lg={12}>
          <ComponentContainerCard title="Editar Post">
            {success && <Alert variant="success">{success}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Subtítulo</Form.Label>
                <Form.Control
                  type="text"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Conteúdo</Form.Label>
                <div>
                  <Button
                    variant="secondary"
                    className="mb-2 me-2"
                    onClick={() => exportHtml((html) => console.log("HTML exportado:", html))}
                  >
                    Exportar HTML
                  </Button>
                  <Button
                    variant="info"
                    className="mb-2"
                    onClick={handlePreviewFullScreen}
                  >
                    Visualizar em Tela Cheia
                  </Button>
                  <EmailEditor ref={emailEditorRef} onReady={onReady} />
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Vídeo (URL YouTube/Vimeo)</Form.Label>
                <Form.Control
                  type="url"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://youtube.com/..."
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Áudio (URL)</Form.Label>
                <Form.Control
                  type="url"
                  value={audioUrl}
                  onChange={(e) => setAudioUrl(e.target.value)}
                  placeholder="https://..."
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Imagem</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setImage(e.target.files?.[0] || null)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Vídeo</Form.Label>
                <Form.Control
                  type="file"
                  accept="video/*"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setVideo(e.target.files?.[0] || null)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tags (separadas por vírgulas)</Form.Label>
                <Form.Control
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Exemplo: Laravel, React, Backend"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Categoria</Form.Label>
                <Form.Select
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                  required
                  disabled={loadingCategories}
                >
                  <option value="">Selecione uma categoria</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
                {loadingCategories && <small>Carregando categorias...</small>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  required
                >
                  <option value="rascunho">Rascunho</option>
                  <option value="aguardando_aprovacao">Aguardando Aprovação</option>
                  <option value="publicado">Publicado</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Agendar Publicação</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Atualizar Post
              </Button>
            </Form>

            <Modal
              show={showPreview}
              onHide={() => setShowPreview(false)}
              fullscreen={true}
              dialogClassName="modal-fullscreen"
            >
              <Modal.Header closeButton>
                <Modal.Title>Pré-visualização do Post</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div
                  dangerouslySetInnerHTML={{ __html: previewHtml }}
                  style={{ width: "100%", height: "100%", overflow: "auto" }}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowPreview(false)}>
                  Fechar
                </Button>
              </Modal.Footer>
            </Modal>
          </ComponentContainerCard>
        </Col>
      </Row>
    </>
  );
};

export default EditarPost;