import { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, ProgressBar, Row } from 'react-bootstrap';
import axios from 'axios';

const MostViewedPosts = () => {
  const [posts, setPosts] = useState<{ id: number; title: string; views: number; progress: number; image: string; author: string; }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost/myNewApi-1/public/api/posts-most-viewed');
        if (response.data.status === 'success') {
          setPosts(response.data.data);
        }
      } catch (err) {
        setError('Erro ao carregar os posts mais visualizados.');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <Row className="align-items-center">
          <Col>
            <CardTitle>Mais Visualizados</CardTitle>
          </Col>
          <Col xs="auto">
            <Dropdown>
              <DropdownToggle className="btn bt btn-light">
                <i className="icofont-calendar fs-5 me-1" />
                No mês
                <i className="ms-1 icofont-caret-down" />
              </DropdownToggle>
              <DropdownMenu align={'end'}>
                <DropdownItem href="#">Hoje</DropdownItem>
                <DropdownItem href="#">Última Semana</DropdownItem>
                <DropdownItem href="#">Último Mês</DropdownItem>
                <DropdownItem href="#">Esse Ano</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="pt-0">
        {loading ? (
          <p>Carregando...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : (
          <div className="table-responsive">
            <table className="table mb-0">
              <tbody>
                {posts.map((post, idx) => (
                  <tr key={idx}>
                    <td className="px-0">
                      <div className="d-flex align-items-center">
                        <img src={post.image} className="me-2 align-self-center thumb-md" alt="..." />
                        <div className="flex-grow-1 text-truncate">
                          <h6 className="m-0 text-truncate">{post.title}</h6>
                          <small className="text-muted">Por {post.author}</small>
                          <div className="d-flex align-items-center">
                            <ProgressBar variant="primary" now={post.progress} className="w-100" style={{ height: 5 }} />
                            <small className="flex-shrink-1 ms-1">{post.progress.toFixed(1)}%</small>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-0 text-end">
                      <span className="text-body ps-2 align-self-center text-end">
                        {post.views} visualizações
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

export default MostViewedPosts;
