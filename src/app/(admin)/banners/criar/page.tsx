"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { Form, Button, Alert, Col, Row } from "react-bootstrap";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import ComponentContainerCard from "@/components/ComponentContainerCard";
import PageMetaData from "@/components/PageMetaData";

interface BannerForm {
  title: string;
  description: string;
  image: File | null;
  link: string;
  position: string;
  status: string;
}

const CriarBanner = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<BannerForm>({
    title: "",
    description: "",
    image: null,
    link: "",
    position: "",
    status: "ativo",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: files && files.length > 0 ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    if (formData.image) data.append("image", formData.image);
    data.append("link", formData.link);
    data.append("position", formData.position);
    data.append("status", formData.status);

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost/myNewApi-1/public/api/banners",
        data,
        { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } }
      );
      setSuccess("Banner criado com sucesso!");
      setTimeout(() => navigate("/admin/banners"), 2000);
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      setError(error.response?.data?.message || "Erro ao criar banner.");
    }
  };

  return (
    <>
      <PageMetaData title="Criar Banner" />
      <Row className="justify-content-center">
        <Col md={12} lg={12}>
          <ComponentContainerCard title="Criar Banner">
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange as any}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange as any}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Imagem</Form.Label>
                <Form.Control
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange as any}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="url"
                  name="link"
                  value={formData.link}
                  onChange={handleChange as any}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Posição</Form.Label>
                <Form.Control
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange as any}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  name="status"
                  value={formData.status}
                  onChange={handleChange as any}
                >
                  <option value="ativo">Ativo</option>
                  <option value="inativo">Inativo</option>
                </Form.Control>
              </Form.Group>

              <Button variant="primary" type="submit">
                Criar Banner
              </Button>
            </Form>
          </ComponentContainerCard>
        </Col>
      </Row>
    </>
  );
};

export default CriarBanner;
