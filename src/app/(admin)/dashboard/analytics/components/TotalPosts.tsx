"use client";

import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import axios, { AxiosError } from "axios";
import { ApexOptions } from "apexcharts";

interface Totals {
  total: number;
  mes: number;
  semana: number;
  hoje: number;
}

const TotalPost = () => {
  const [totais, setTotais] = useState<Totals>({ total: 0, mes: 0, semana: 0, hoje: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [labels, setLabels] = useState<string[]>([]);
  const [values, setValues] = useState<number[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [totalRes, postsRes] = await Promise.all([
          axios.get("http://localhost/myNewApi-1/public/api/posts-total"),
          axios.get("http://localhost/myNewApi-1/public/api/posts-por-mes"),
        ]);
        if (totalRes.data.status === "success") setTotais(totalRes.data.data);
        if (postsRes.data.status === "success") {
          setLabels(postsRes.data.data.labels);
          setValues(postsRes.data.data.values);
        }
      } catch (err) {
        const error = err as AxiosError<{ message?: string }>;
        setError(error.response?.data?.message || "Erro ao carregar os dados.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []); // Dependências vazias são aceitáveis se fetchData é estático

  const chartOptions: ApexOptions = {
    chart: { height: 270, type: "bar", toolbar: { show: false } },
    colors: ["#22c55e"],
    plotOptions: { bar: { borderRadius: 6, columnWidth: "40%", distributed: true } },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: { fontSize: "12px", colors: ["#8997bd"] },
    },
    xaxis: { categories: labels },
    yaxis: {
      labels: {
        formatter: (val: number) => `${val}`, // Converter número para string
      },
    },
    grid: { strokeDashArray: 2.5 },
    legend: { show: false },
  };

  return (
    <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Publicações por mês</CardTitle>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        {loading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <>
            <ReactApexChart
              height={270}
              options={chartOptions}
              series={[{ name: "Publicações", data: values }]}
              type="bar"
            />
            <Row className="mt-4">
              {[
                { title: "TOTAL", stat: totais.total },
                { title: "NESTE MÊS", stat: totais.mes },
                { title: "NESSA SEMANA", stat: totais.semana },
                { title: "TOTAL HOJE", stat: totais.hoje },
              ].map((item, idx) => (
                <Col md={6} lg={3} key={idx}>
                  <Card className="shadow-none border mb-3">
                    <CardBody className="text-center">
                      <span className="fs-18 fw-semibold">{item.stat}</span>
                      <h6 className="text-uppercase text-muted mt-2 m-0">{item.title}</h6>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default TotalPost;
