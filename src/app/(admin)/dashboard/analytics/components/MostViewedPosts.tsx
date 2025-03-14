import { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, ProgressBar, Row } from 'react-bootstrap';
import axios from 'axios';
import defaultImage from '@/assets/images/user.png'; // Importe a imagem padrão

const MostViewedPosts = () => {
  const [posts, setPosts] = useState<{ id: number; title: string; views: number; progress: number; image: string; author: string; }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${API_URL}/posts-most-viewed`);
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
                        <img
                          src={post.image && post.image.trim() !== '' ? post.image : defaultImage}
                          className="me-2 align-self-center thumb-md"
                          alt={post.title}
                          onError={(e) => (e.currentTarget.src = defaultImage)} // Fallback adicional
                        />
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