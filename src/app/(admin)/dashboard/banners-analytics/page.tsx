"use client";

import { useEffect, useState } from "react";
import { Table, Alert, Form, Button } from "react-bootstrap";
import axios from "axios";
import ComponentContainerCard from "@/components/ComponentContainerCard";

const calculateCTR = (clicks: number, views: number) => {
  if (views === 0) return "0%";
  return ((clicks / views) * 100).toFixed(2) + "%";
};

// Função para formatar a data no formato DD/MM/YYYY
const formatDate = (dateString: string | null) => {
  if (!dateString) return "N/A"; // Retorna "N/A" se a data for null ou undefined
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() é 0-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const BannersAnalytics = () => {
  const [reportData, setReportData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [position, setPosition] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchReport();
  }, []);

  const fetchReport = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");

    try {
      const response = await axios.get("http://localhost/myNewApi-1/public/api/banners/reports", {
        params: { start_date: startDate, end_date: endDate, position },
        headers: { Authorization: `Bearer ${token}` },
      });

      setReportData(response.data.data);
      setError("");
    } catch (err) {
      setError("Erro ao carregar os relatórios.");
    }
    setLoading(false);
  };

  return (
    <ComponentContainerCard title="Análises de Banners">
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Filtros */}
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

      {/* Tabela de Relatórios */}
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
            {reportData.map((banner, idx) => (
              <tr key={idx}>
                <td>{banner.id}</td>
                <td>{banner.title}</td>
                <td>{banner.position}</td>
                <td>{banner.clicks}</td>
                <td>{banner.views}</td>
                <td>{calculateCTR(banner.clicks, banner.views)}</td>
                <td>{formatDate(banner.start_date)}</td> {/* Data formatada */}
                <td>{formatDate(banner.end_date)}</td>   {/* Data formatada */}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </ComponentContainerCard>
  );
};

export default BannersAnalytics;