import { useState, useEffect } from 'react'
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import ReactApexChart from 'react-apexcharts'
import type { ApexOptions } from 'apexcharts'

const CategoriesChart = () => {
  const [categories, setCategories] = useState<string[]>([])
  const [values, setValues] = useState<number[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Buscar categorias mais visualizadas
  const fetchCategories = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('http://localhost/myNewApi-1/public/api/posts/most-viewed-categories')
      if (!response.ok) throw new Error('Erro ao buscar categorias')

      const data = await response.json()
      if (data.status === 'success') {
        setCategories(data.data.map((cat: any) => cat.name))
        setValues(data.data.map((cat: any) => cat.total))
      } else {
        throw new Error(data.message || 'Erro ao carregar categorias')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const chartOptions: ApexOptions = {
    series: [{ name: 'Itens', data: values }],
    chart: {
      type: 'bar',
      height: 275,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        horizontal: true,
        distributed: true,
        barHeight: '85%',
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (_val, opt) {
        return categories[opt.dataPointIndex]
      },
      style: {
        colors: ['#22c55e'],
        fontWeight: 400,
        fontSize: '13px',
      },
    },
    xaxis: { categories },
    colors: [
      'rgba(34, 197, 94, 0.45)',
      'rgba(34, 197, 94, 0.4)',
      'rgba(34, 197, 94, 0.35)',
      'rgba(34, 197, 94, 0.3)',
      'rgba(34, 197, 94, 0.25)',
      'rgba(34, 197, 94, 0.2)',
      'rgba(34, 197, 94, 0.15)',
      'rgba(34, 197, 94, 0.1)',
    ],
    legend: { show: false },
  }

  return (
    <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Categorias mais Visualizadas</CardTitle>
          </Col>
          <Col xs="auto">
            <div className="text-center">
              <h6 className="text-uppercase text-muted mt-1 m-0">
                <span className="fs-16 fw-semibold">{categories.length}</span> Categorias
              </h6>
            </div>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        {loading ? (
          <div className="text-center py-3">Carregando...</div>
        ) : error ? (
          <div className="text-center py-3 text-danger">{error}</div>
        ) : categories.length === 0 ? (
          <div className="text-center py-3">Nenhuma categoria encontrada</div>
        ) : (
          <>
            <ReactApexChart height={265} options={chartOptions} series={chartOptions.series} type="bar" />
            <div className="text-center">
              
            </div>
          </>
        )}
      </CardBody>
    </Card>
  )
}

export default CategoriesChart
