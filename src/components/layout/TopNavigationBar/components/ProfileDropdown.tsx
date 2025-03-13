import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const ProfileDropdown = () => {
  const { user, logout } = useContext(AuthContext) || {}; 

  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  const userImage = user?.profile_photo_path
    ? `http://localhost/myNewApi-1/storage/${user.profile_photo_path}`
    : null;

  const handleLogout = () => {
    if (logout) {
      logout();
    }
  };

  const initialStyle = {
    width: "40px", 
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#d7454d", 
    color: "#fff", 
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px", 
    fontWeight: "bold",
  };

  return (
    <Dropdown className="topbar-item">
      <DropdownToggle
        className="nav-link arrow-none nav-icon"
        role="button"
        aria-haspopup="false"
        aria-expanded="false"
      >
        {userImage ? (
          <img src={userImage} alt="user" className="thumb-lg rounded-circle" />
        ) : (
          <div style={initialStyle}>{userInitial}</div>
        )}
      </DropdownToggle>
      <DropdownMenu align="end" className="py-0">
        <div className="d-flex align-items-center dropdown-item py-2 bg-secondary-subtle">
          <div className="flex-shrink-0">
            {userImage ? (
              <img src={userImage} alt="avatar" className="thumb-md rounded-circle" />
            ) : (
              <div style={{ ...initialStyle, width: "32px", height: "32px", fontSize: "16px" }}>
                {userInitial}
              </div>
            )}
          </div>
          <div className="flex-grow-1 ms-2 text-truncate align-self-center">
            <h6 className="my-0 fw-medium text-dark fs-13">{user?.name || "Usuário"}</h6>
            <small className="text-muted mb-0">{user?.role || "Membro"}</small>
          </div>
        </div>

        <DropdownItem className="text-danger" onClick={handleLogout}>
          <IconifyIcon icon="la:power-off" className="fs-18 me-1 align-text-bottom" /> Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProfileDropdown;