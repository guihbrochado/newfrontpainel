"use client";

import { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import ComponentContainerCard from "@/components/ComponentContainerCard";
import PageMetaData from "@/components/PageMetaData";
import { EditorRef, EmailEditor, EmailEditorProps } from "react-email-editor";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/context/AuthContext";

// Interface ajustada para o JSONTemplate do EmailEditor
/*interface JSONTemplate {
  counters: Record<string, any>;
  body: {
    id?: string;
    rows?: any[];
    headers?: any[];
    footers?: any[];
    values?: Record<string, any>;
  };
}*/

interface Category {
  id: number;
  name: string;
}

const CreatePost = () => {
  const { user, loading } = useAuthContext();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [status, setStatus] = useState("rascunho");
  const [scheduleDate, setScheduleDate] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [tags, setTags] = useState("");
  const [error, setError] = useState<string | null>("");
  const [success, setSuccess] = useState<string | null>("");
  const [loadingCategories, setLoadingCategories] = useState(false);

  const emailEditorRef = useRef<EditorRef>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading || !user) {
      setError("Usuário não autenticado.");
      return;
    }

    const fetchCategories = async () => {
      setLoadingCategories(true);
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost/myNewApi-1/public/api/categorias", // Alterado para rota pública
          { headers: { Authorization: `Bearer ${token}` } } // Token ainda enviado, mas opcional
        );
        setCategories(response.data);
      } catch (err) {
        const error = err as AxiosError<{ message?: string }>;
        console.error("Erro ao buscar categorias:", error.response?.data?.message || error.message);
        setError("Erro ao carregar categorias. Tente novamente.");
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, [user, loading]);

  const exportHtml = (callback: (html: string) => void) => {
    const unlayer = emailEditorRef.current?.editor;
    unlayer?.exportHtml((data) => {
      const { html } = data;
      callback(html);
    });
  };

  const onReady: EmailEditorProps["onReady"] = (unlayer) => {
    // Carregar um design inicial vazio com estrutura correta
    unlayer?.loadDesign({
      counters: {},
      body: {
        id: "initial-body",
        rows: [],
        headers: [],
        footers: [],
        values: {},
      },
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    const token = localStorage.getItem("token");
    console.log("Token enviado:", token);
    console.log("Usuário atual:", user);
  
    exportHtml(async (html) => {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("content", html);
      formData.append("category_id", categoryId);
      formData.append("status", status);
      formData.append("video_url", videoUrl);
      formData.append("audio_url", audioUrl);
  
      if (tags) formData.append("tags", tags);
      if (scheduleDate) formData.append("schedule_date", scheduleDate);
      if (image) formData.append("image", image);
  
      try {
        const response = await axios.post(
          "http://localhost/myNewApi-1/public/api/posts",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setSuccess("Post criado com sucesso!");
        setTimeout(() => navigate("/admin/posts"), 2000);
      } catch (err) {
        const error = err as AxiosError<{ message?: string }>;
        const errorMessage = error.response?.data?.message || "Erro ao criar o post.";
        if (errorMessage.includes("Duplicate entry")) {
          setError("Já existe um post com esse título. Por favor, use um título diferente.");
        } else {
          setError(errorMessage);
        }
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
      <PageMetaData title="Criar Post" />
      <Row className="justify-content-center">
        <Col md={12} lg={12}>
          <ComponentContainerCard title="Criar Post">
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
                  accept="image/jpeg,image/png,image/jpg,image/gif"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setImage(e.target.files?.[0] || null)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tags (separadas por vírgulas)</Form.Label>
                <Form.Control
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Exemplo: Esporte, Economia, Tecnologia"
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
                Publicar
              </Button>
            </Form>
          </ComponentContainerCard>
        </Col>
      </Row>
    </>
  );
};

export default CreatePost;
