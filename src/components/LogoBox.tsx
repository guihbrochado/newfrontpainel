import logoLight from '@/assets/images/tudoaquisc.png';
import logoSm from '@/assets/images/tudoaquisc.png';
import { Link } from 'react-router-dom';

const LogoBox = () => {
  return (
    <Link to="/" className="logo">
      <span>
        <img
          src={logoSm}
          alt="logo-small"
          style={{ width: '90%', height: 'auto' }}
          className="logo-sm"
        />
      </span>
      <span>
        <img
          src={logoLight}
          alt="logo-large"
          style={{ width: '90%', height: 'auto' }}
          className="logo-lg logo-light"
        />
      </span>
    </Link>
  );
};

export default LogoBox;