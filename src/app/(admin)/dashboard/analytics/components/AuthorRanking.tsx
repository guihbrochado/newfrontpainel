import { Card, CardBody, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import defaultImage from '@/assets/images/user.png'; // Importe a imagem padrão

type AuthorData = {
  id: string;
  name: string;
  image: string;
  amount: number;
};

const AuthorRanking = () => {
  const [authors, setAuthors] = useState<AuthorData[]>([]);
  const [period, setPeriod] = useState('month');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchTopAuthors = async (selectedPeriod: string) => {
    try {
      setLoading(true);
      setError(null);

      console.log(`Buscando autores para período: ${selectedPeriod}`);
      const response = await fetch(`${API_URL}/posts/top-authors?period=${selectedPeriod}`);

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

  return (
    <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Autores que mais publicam</CardTitle>
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
                          src={author.image && author.image.trim() !== '' ? author.image : defaultImage}
                          height={36}
                          className="me-2 align-self-center rounded"
                          alt={author.name}
                          onError={(e) => (e.currentTarget.src = defaultImage)} // Fallback adicional
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