"use client";

import { useEffect, useState, ChangeEvent } from "react";
import { Table, Modal, Button, Form, Alert, Nav } from "react-bootstrap";
import axios, { AxiosError } from "axios";
import { useAuthContext } from "@/context/AuthContext";
//import { useNavigate } from "react-router-dom";
import PageMetaData from "@/components/PageMetaData";
import ComponentContainerCard from "@/components/ComponentContainerCard";
import IconifyIcon from "@/components/wrappers/IconifyIcon";

// Interface para o formato do erro retornado pela API
interface ApiErrorResponse {
  message?: string;
}

interface Banner {
  id: number;
  title: string;
  image_path: string;
  position: string;
  is_carousel: boolean;
  url: string;
  open_in_new_tab: boolean;
  start_date: string;
  end_date: string;
  clicks: number;
  is_active: boolean;
}

interface BannerFormData {
  title: string;
  image: File | null;
  position: string;
  order: number;
  carousel: boolean;
  url: string;
  open_in_new_tab: boolean;
  start_date: string;
  end_date: string;
  clicks: number;
  is_active: boolean;
}

const ListaBanners = () => {
  const { user } = useAuthContext();
  //  const navigate = useNavigate();
  const [banners, setBanners] = useState<Banner[]>([]);
  const [error, setError] = useState<string | null>("");
  const [message, setMessage] = useState<string | null>("");
  const [activeTab, setActiveTab] = useState("ativos");
  const [showModal, setShowModal] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);
  const [bannerData, setBannerData] = useState<BannerFormData>({
    title: "",
    image: null,
    position: "topo",
    order: 1,
    carousel: false,
    url: "",
    open_in_new_tab: false,
    start_date: "",
    end_date: "",
    clicks: 0,
    is_active: true,
  });

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!user) {
      setError("Usuário não autenticado.");
      return;
    }
    if (user.role !== "Administrador") {
      setError("Você não tem permissão para acessar esta página.");
      return;
    }

    const fetchBanners = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${API_URL}/banners`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const bannersArray = response.data?.data || [];
        setBanners(bannersArray);
      } catch (err) {
        setError("Erro ao carregar banners.");
      }
    };

    fetchBanners();
  }, [user]);

  const filterBanners = (status: string) => {
    return banners.filter((banner) => {
      if (status === "ativos") return banner.is_active;
      if (status === "inativos") return !banner.is_active;
      return true;
    });
  };

  const handleEditClick = (banner: Banner) => {
    setSelectedBanner(banner);
    const initialPosition = ["topo", "lateral", "entre_conteudos", "rodape"].includes(banner.position)
      ? banner.position
      : "topo";
    setBannerData({
      title: banner.title || "",
      image: null,
      position: initialPosition,
      order: 1,
      carousel: banner.is_carousel || false,
      url: banner.url || "",
      open_in_new_tab: banner.open_in_new_tab || false,
      start_date: banner.start_date ? new Date(banner.start_date).toISOString().split("T")[0] : "",
      end_date: banner.end_date ? new Date(banner.end_date).toISOString().split("T")[0] : "",
      clicks: banner.clicks || 0,
      is_active: banner.is_active || true,
    });
    setShowModal(true);
  };

  const handleCreateClick = () => {
    setSelectedBanner(null);
    setBannerData({
      title: "",
      image: null,
      position: "topo",
      order: 1,
      carousel: false,
      url: "",
      open_in_new_tab: false,
      start_date: "",
      end_date: "",
      clicks: 0,
      is_active: true,
    });
    setShowModal(true);
  };

  const handleSaveBanner = async () => {
    const token = localStorage.getItem("token");
    try {
      const validPosition = ["topo", "lateral", "entre_conteudos", "rodape"].includes(bannerData.position)
        ? bannerData.position
        : "topo";

      const formData = new FormData();
      formData.append("title", bannerData.title);
      if (bannerData.image instanceof File) {
        formData.append("image", bannerData.image);
      }
      formData.append("position", validPosition);
      formData.append("is_carousel", bannerData.carousel ? "1" : "0");
      formData.append("url", bannerData.url);
      formData.append("open_in_new_tab", bannerData.open_in_new_tab ? "1" : "0");
      formData.append("start_date", bannerData.start_date || "");
      formData.append("end_date", bannerData.end_date || "");
      formData.append("is_active", bannerData.is_active ? "1" : "0");

      // Log para verificar os dados enviados
      console.log("Dados enviados no FormData:");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value instanceof File ? `${value.name} (${value.size} bytes)` : value}`);
      }

      if (selectedBanner) {
        const response = await axios.put(
          `${API_URL}/banners/${selectedBanner.id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Resposta do servidor (update):", response.data);
        setBanners(
          banners.map((b) =>
            b.id === selectedBanner.id
              ? {
                ...b,
                ...bannerData,
                position: validPosition,
                image_path: response.data.data.image_path || b.image_path,
              }
              : b
          )
        );
        setMessage("Banner atualizado com sucesso!");
      } else {
        const response = await axios.post(
          `${API_URL}/banners`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setBanners([...banners, response.data.data]);
        setMessage("Banner criado com sucesso!");
      }
      setShowModal(false);
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      const error = err as AxiosError<ApiErrorResponse>;
      console.error("Erro ao salvar banner:", error.response?.data);
      setError(error.response?.data?.message || "Erro ao salvar banner. Tente novamente.");
    }
  };

  const handleDeleteClick = async (banner: Banner) => {
    if (!confirm("Tem certeza que deseja excluir este banner?")) return;

    const token = localStorage.getItem("token");
    try {
      await axios.delete(
        `${API_URL}/banners/${banner.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setBanners(banners.filter((b) => b.id !== banner.id));
      setMessage("Banner excluído com sucesso!");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error("Erro ao excluir banner:", err);
      setError("Erro ao excluir banner. Tente novamente.");
    }
  };

  const handleToggleStatus = async (id: number, currentStatus: boolean) => {
    const token = localStorage.getItem("token");
    try {
      await axios.patch(
        `${API_URL}/banners/${id}/toggle-status`, {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setBanners(
        banners.map((banner) =>
          banner.id === id ? { ...banner, is_active: !currentStatus } : banner
        )
      );
      setMessage(`Status do banner atualizado para ${!currentStatus ? "ativo" : "inativo"}!`);
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      console.error("Erro ao alternar status:", err);
      setError("Erro ao atualizar o status do banner.");
    }
  };

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <>
      <PageMetaData title="Gestão de Banners" />
      <ComponentContainerCard title="Gestão de Banners" showAddButton onAddClick={handleCreateClick}>
        {message && <Alert variant="info">{message}</Alert>}

        <Nav variant="tabs" className="mt-3">
          <Nav.Item>
            <Nav.Link active={activeTab === "ativos"} onClick={() => setActiveTab("ativos")}>
              Ativos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={activeTab === "inativos"} onClick={() => setActiveTab("inativos")}>
              Inativos
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Table striped className="table mb-0 mt-3">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Imagem</th>
              <th>Título</th>
              <th>Posição</th>
              <th>Ordem</th>
              <th>Carrossel</th>
              <th>Cliques</th>
              <th>Ativo</th>
              <th className="text-end">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filterBanners(activeTab).length > 0 ? (
              filterBanners(activeTab).map((banner) => (
                <tr key={banner.id}>
                  <td>{banner.id}</td>
                  <td>
                    {banner.image_path && (
                      <img
                        src={`${API_URL}/storage/app/public/banners/${banner.image_path
                          .split("/")
                          .pop()}`}
                        alt={banner.title || "Banner"}
                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                      />
                    )}
                  </td>
                  <td>{banner.title || "Sem título"}</td>
                  <td>{banner.position}</td>
                  <td>{1}</td>
                  <td>{banner.is_carousel ? "Sim" : "Não"}</td>
                  <td>{banner.clicks || 0}</td>
                  <td>{banner.is_active ? "Sim" : "Não"}</td>
                  <td className="text-end">
                    <span role="button" onClick={() => handleEditClick(banner)}>
                      <IconifyIcon icon="la:pen" className="text-secondary font-16 me-2" />
                    </span>
                    <span role="button" onClick={() => handleDeleteClick(banner)}>
                      <IconifyIcon icon="la:trash-alt" className="text-danger font-16" />
                    </span>
                    <span role="button" onClick={() => handleToggleStatus(banner.id, banner.is_active)}>
                      <IconifyIcon
                        icon={banner.is_active ? "la:times" : "la:check"}
                        className={banner.is_active ? "text-secondary font-16 me-2" : "text-success font-16"}
                      />
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className="text-center">
                  Nenhum banner encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedBanner ? "Editar Banner" : "Criar Banner"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  value={bannerData.title}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setBannerData((prev) => ({ ...prev, title: e.target.value }))
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Imagem</Form.Label>
                <Form.Control
                  type="file"
                  accept=".png,.jpg,.gif"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      if (file.size > 2048 * 1024) {
                        setError("A imagem deve ter no máximo 2 MB.");
                        return;
                      }
                      const validTypes = ["image/png", "image/jpeg", "image/gif"];
                      if (!validTypes.includes(file.type)) {
                        setError("A imagem deve ser do tipo PNG, JPG ou GIF.");
                        return;
                      }
                      console.log("Imagem selecionada:", file.name, file.size, "bytes"); // Log para verificar
                      setBannerData((prev) => ({ ...prev, image: file }));
                    }
                  }}
                />
                {selectedBanner && selectedBanner.image_path && (
                  <img
                    src={`${API_URL}/storage/app/public/banners/${selectedBanner.image_path.split("/").pop()}`}
                    alt={selectedBanner.title || "Banner"}
                    style={{ maxWidth: "100px", maxHeight: "100px", marginTop: "10px" }}
                  />
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Posição</Form.Label>
                <Form.Select
                  value={bannerData.position}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                    setBannerData((prev) => ({ ...prev, position: e.target.value }))
                  }
                >
                  <option value="topo">Topo</option>
                  <option value="lateral">Lateral</option>
                  <option value="entre_conteudos">Entre Conteúdos</option>
                  <option value="rodape">Rodapé</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Ordem</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  value={bannerData.order}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setBannerData((prev) => ({ ...prev, order: parseInt(e.target.value) }))
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Exibir no Carrossel"
                  checked={bannerData.carousel}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setBannerData((prev) => ({ ...prev, carousel: e.target.checked }))
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type="text"
                  value={bannerData.url}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setBannerData((prev) => ({ ...prev, url: e.target.value }))
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Abrir em nova aba"
                  checked={bannerData.open_in_new_tab}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setBannerData((prev) => ({ ...prev, open_in_new_tab: e.target.checked }))
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Data de Início</Form.Label>
                <Form.Control
                  type="date"
                  value={bannerData.start_date}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setBannerData((prev) => ({ ...prev, start_date: e.target.value }))
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Data de Término</Form.Label>
                <Form.Control
                  type="date"
                  value={bannerData.end_date}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setBannerData((prev) => ({ ...prev, end_date: e.target.value }))
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Ativo"
                  checked={bannerData.is_active}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setBannerData((prev) => ({ ...prev, is_active: e.target.checked }))
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleSaveBanner}>
              Salvar
            </Button>
          </Modal.Footer>
        </Modal>
      </ComponentContainerCard>
    </>
  );
};

export default ListaBanners;
