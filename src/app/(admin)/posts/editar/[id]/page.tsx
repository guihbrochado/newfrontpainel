"use client";

import { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import { Form, Button, Alert, Col, Row } from "react-bootstrap";
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
  id: number;
  name: string;
}

interface Post {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  category_id: number;
  status: string;
  video_url: string;
  audio_url: string;
  tags: string;
  schedule_date: string;
  image_url: string;
  video: string;
  design: JSONTemplate;
}

const EditarPost = () => {
  const { id } = useParams<{ id: string }>();
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
  const [error, setError] = useState<string | null>("");
  const [success, setSuccess] = useState<string | null>("");
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [design, setDesign] = useState<JSONTemplate | null>(null);

  const emailEditorRef = useRef<EditorRef>(null);

  useEffect(() => {
    if (loading || !user) {
      setError("Usuário não autenticado.");
      return;
    }

    const fetchPost = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost/myNewApi-1/public/api/posts/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const post: Post = response.data;
        setTitle(post.title);
        setSubtitle(post.subtitle);
        setVideoUrl(post.video_url);
        setAudioUrl(post.audio_url);
        setCategoryId(post.category_id.toString());
        setStatus(post.status);
        setScheduleDate(post.schedule_date || "");
        setTags(post.tags || "");
        setDesign(post.design || {
          counters: {},
          body: { id: "default", rows: [], headers: [], footers: [], values: {} },
        });
      } catch (err) {
        const error = err as AxiosError<{ message?: string }>;
        setError(error.response?.data?.message || "Erro ao carregar o post.");
      }
    };

    const fetchCategories = async () => {
      setLoadingCategories(true);
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost/myNewApi-1/public/api/posts-categories",
          { headers: { Authorization: `Bearer ${token}` } }
        );
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
  }, [id, user, loading]);

  const exportHtml = (callback: (html: string) => void) => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml((data) => {
      const { html } = data;
      callback(html);
    });
  };

  const onReady: EmailEditorProps["onReady"] = (unlayer) => {
    if (design) {
      unlayer?.loadDesign(design);
    } else {
      unlayer?.loadDesign({
        counters: {},
        body: { id: "default", rows: [], headers: [], footers: [], values: {} },
      });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    exportHtml(async (html) => {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("content", html);
      formData.append("category_id", categoryId);
      formData.append("status", status);
      formData.append("video_url", videoUrl);
      formData.append("audio_url", audioUrl);
      formData.append("tags", tags);
      if (scheduleDate) formData.append("schedule_date", scheduleDate);
      if (image) formData.append("image", image);
      if (video) formData.append("video", video);

      try {
        const token = localStorage.getItem("token");
        await axios.put(
          `http://localhost/myNewApi-1/public/api/posts/${id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setSuccess("Post atualizado com sucesso!");
        setTimeout(() => navigate("/admin/posts"), 2000);
      } catch (err) {
        const error = err as AxiosError<{ message?: string }>;
        setError(error.response?.data?.message || "Erro ao atualizar o post.");
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
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
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
                    className="mb-2"
                    onClick={() => exportHtml(() => {})}
                  >
                    Export HTML
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
                <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
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
          </ComponentContainerCard>
        </Col>
      </Row>
    </>
  );
};

export default EditarPost;
