import { Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

type AuthorData = {
  id: string;
  name: string;
  image: string;
  amount: number;
};

const AuthorRanking = () => {
  const [authors, setAuthors] = useState<AuthorData[]>([]);
  const [period, setPeriod] = useState('month'); // Período padrão: último mês
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Função para buscar os dados da API
  const fetchTopAuthors = async (selectedPeriod: string) => {
    try {
      setLoading(true);
      setError(null);

      console.log(`Buscando autores para período: ${selectedPeriod}`);
      const response = await fetch(`http://localhost/myNewApi-1/public/api/posts/top-authors?period=${selectedPeriod}`);

      if (!response.ok) {
        console.error('Erro na resposta da API:', response);
        throw new Error('Erro ao buscar autores');
      }

      const data = await response.json();
      console.log('Dados recebidos:', data);

      if (data.status === 'success') {
        setAuthors(data.data);
      } else {
        throw new Error(data.message || 'Erro ao carregar dados');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      console.error('Erro ao buscar autores:', err);
    } finally {
      setLoading(false);
    }
  };


  // Buscar dados quando o componente montar ou o período mudar
  useEffect(() => {
    fetchTopAuthors(period);
  }, [period]);

  // Mapear os períodos do dropdown para os valores da API
  const periodOptions = [
    { label: 'Hoje', value: 'today' },
    { label: 'Última Semana', value: 'week' },
    { label: 'No Mês', value: 'month' },
    { label: 'Esse Ano', value: 'year' },
  ];

  return (
    <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Autores que mais publicam</CardTitle>
          </Col>
          <Col xs="auto">
            <Dropdown>
              <DropdownToggle className="btn btn-light">
                <i className="icofont-calendar fs-5 me-1" />
                {periodOptions.find(opt => opt.value === period)?.label || 'No Mês'}
                <IconifyIcon icon="la:angle-down" className="ms-1" />
              </DropdownToggle>
              <DropdownMenu align={'end'}>
                {periodOptions.map((opt) => (
                  <DropdownItem
                    key={opt.value}
                    onClick={() => setPeriod(opt.value)}
                    active={period === opt.value}
                  >
                    {opt.label}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        {loading ? (
          <div className="text-center py-3">Carregando...</div>
        ) : error ? (
          <div className="text-center py-3 text-danger">{error}</div>
        ) : authors.length === 0 ? (
          <div className="text-center py-3">Nenhum autor encontrado para este período.</div>
        ) : (
          <div className="table-responsive">
            <table className="table mb-0">
              <tbody>
                {authors.map((author, idx) => (
                  <tr key={idx}>
                    <td className="px-0">
                      <div className="d-flex align-items-center">
                        <img
                          src={author.image}
                          height={36}
                          className="me-2 align-self-center rounded"
                          alt={author.name}
                        />
                        <div className="flex-grow-1 text-truncate">
                          <h6 className="m-0 text-truncate">{author.name}</h6>
                          <Link
                            to={`/colunista/${author.id}`} // Ajuste o link conforme sua estrutura de rotas
                            className="font-12 text-muted text-decoration-underline"
                          >
                            #{author.id}
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td className="px-0 text-end">
                      <span className="text-primary ps-2 align-self-center text-end">
                        {author.amount}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default AuthorRanking;
