import IconifyIcon from '@/components/wrappers/IconifyIcon'
import useScrollEvent from '@/hooks/useScrollEvent'
import clsx from 'clsx'
import LeftSideBarToggle from './components/LeftSideBarToggle'
import ProfileDropdown from './components/ProfileDropdown'
import { useAuthContext } from '@/context/AuthContext'

const TopNavigationBar = () => {
  const { scrollY } = useScrollEvent()
  const { user, loading } = useAuthContext()

  const userName = user?.name || 'Usuário'

  return (
    <div className="topbar d-print-none">
      <div className="container-xxl">
        <nav className={clsx('topbar-custom d-flex justify-content-between', { 'nav-sticky': scrollY >= 50 })} id="topbar-custom">
          <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
            <LeftSideBarToggle />

            <li className="mx-3 welcome-text">
              <h3 className="mb-0 fw-bold text-truncate">
                {loading ? 'Carregando...' : `Bom dia, ${userName}!`}
              </h3>
            </li>
          </ul>
          <ul className="topbar-item list-unstyled d-inline-flex align-items-center mb-0">
            
            <ProfileDropdown />
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default TopNavigationBar