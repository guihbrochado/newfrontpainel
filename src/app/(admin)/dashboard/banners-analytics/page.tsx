"use client";

import { useEffect, useState } from "react";
import { Table, Alert, Form, Button } from "react-bootstrap";
import axios from "axios";
import ComponentContainerCard from "@/components/ComponentContainerCard";

const calculateCTR = (clicks: number, views: number) => {
  if (views === 0) return "0%";
  return ((clicks / views) * 100).toFixed(2) + "%";
};

const formatDate = (dateString: string | null) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const BannersAnalytics = () => {
  const [reportData, setReportData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [position, setPosition] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchReport = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    console.log("Parâmetros enviados:", { startDate, endDate, position });

    try {
      const response = await axios.get(`${API_URL}/banners/reports`, {
        params: { 
          start_date: startDate, 
          end_date: endDate, 
          position,
          timestamp: new Date().getTime()
        },
        headers: { 
          Authorization: `Bearer ${token}`,
          "Cache-Control": "no-cache"
        },
      });

      console.log("Dados recebidos:", response.data);
      setReportData(response.data.data);
      setMessage(response.data.message || ""); // Define a mensagem retornada pelo backend
      setError("");
    } catch (err) {
      setError("Erro ao carregar os relatórios.");
      console.error("Erro na requisição:", err);
      setMessage("");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchReport();
  }, []);

  return (
    <ComponentContainerCard title="Análises de Banners">
      {error && <Alert variant="danger">{error}</Alert>}
      {message && !error && <Alert variant="info">{message}</Alert>} {/* Exibe mensagens como "Nenhum banner encontrado" */}

      <Form className="mb-3">
        <div className="d-flex gap-2">
          <Form.Group controlId="startDate">
            <Form.Label>Data Inicial</Form.Label>
            <Form.Control
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="endDate">
            <Form.Label>Data Final</Form.Label>
            <Form.Control
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="position">
            <Form.Label>Posição</Form.Label>
            <Form.Control as="select" value={position} onChange={(e) => setPosition(e.target.value)}>
              <option value="">Todas</option>
              <option value="topo">Topo</option>
              <option value="lateral">Lateral</option>
              <option value="entre_conteudos">Entre Conteúdos</option>
              <option value="rodape">Rodapé</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" className="align-self-end" onClick={fetchReport}>
            Filtrar
          </Button>
        </div>
      </Form>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Posição</th>
              <th>Clique Total</th>
              <th>Impressões</th>
              <th>CTR (%)</th>
              <th>Data Inicial</th>
              <th>Data Final</th>
            </tr>
          </thead>
          <tbody>
            {reportData.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center">
                  Nenhum dado encontrado.
                </td>
              </tr>
            ) : (
              reportData.map((banner, idx) => (
                <tr key={idx}>
                  <td>{banner.id}</td>
                  <td>{banner.title}</td>
                  <td>{banner.position}</td>
                  <td>{banner.clicks}</td>
                  <td>{banner.views}</td>
                  <td>{calculateCTR(banner.clicks, banner.views)}</td>
                  <td>{formatDate(banner.start_date)}</td>
                  <td>{formatDate(banner.end_date)}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      )}
    </ComponentContainerCard>
  );
};

export default BannersAnalytics;