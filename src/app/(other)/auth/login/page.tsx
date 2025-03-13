import IconifyIcon from '@/components/wrappers/IconifyIcon';
import LoginForm from './components/LoginForm';
import LogoBox from '@/components/LogoBox';
import { Card, CardBody, Col } from 'react-bootstrap';
import PageMetaData from '@/components/PageMetaData';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/tudoaquisc.png'; // Importando o logo

const Login = () => {
  return (
    <>
      <PageMetaData title="Login" />
    <Col lg={4} className="mx-auto">
      <Card>
        <CardBody className="p-0 bg-black auth-header-box rounded-top">
          <div className="text-center p-3">
            <Link to="/" className="logo logo-admin">
              <img src={logo} height={50} alt="logo" className="auth-logo" />
            </Link>
            <h4 className="mt-3 mb-1 fw-semibold text-white fs-18">Bem Vindo Ao Portal Tudo Aqui SC</h4>
            <p className="text-muted fw-medium mb-0">Entre para continuar.</p>
          </div>
        </CardBody>
        <CardBody className="pt-0">
          <LoginForm />
          
        </CardBody>
      </Card>
    </Col>
    </>
  );
};

export default Login;