import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";

export default function Navbar({ updateSidenav, sidenavState }) {
  return (
    <MDBNavbar id="main-navbar" expand="lg" light fixed="top" bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <img
            src="http://localhost:3000/logo.jpeg"
            height="60"
            alt=""
            loading="lazy"
          />
        </MDBNavbarBrand>
        <MDBBtn
          onClick={() => updateSidenav(!sidenavState)}
          className="shadow-0 p-0 me-3 d-block d-xxl-none"
          color="light"
        >
          <MDBIcon icon="bars" size="lg" fas />
        </MDBBtn>
        <MDBNavbarNav className="ms-auto d-flex flex-row">
          <MDBNavbarItem className="active">
            <MDBNavbarLink aria-current="page" href="http://localhost:3000">
              Home
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="/form">Form</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="/help">Help</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="/login-register">Login</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle
                style={{ cursor: "pointer" }}
                tag="a"
                className="nav-link me-3 me-lg-0 hidden-arrow"
              >
                <MDBIcon flag="uk" fas />
              </MDBDropdownToggle>
              <MDBDropdownMenu style={{ zIndex: 1060 }}>
                <MDBDropdownItem link>
                  <MDBIcon flag="uk" fas /> English{" "}
                  <MDBIcon icon="check" className="text-success ms-2" />
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <MDBIcon flag="pl" fas /> Polski
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <MDBIcon flag="cn" fas /> 中文
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <MDBIcon flag="jp" fas /> 日本語
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <MDBIcon flag="de" fas /> Deutsch
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <MDBIcon flag="fr" fas /> Français
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <MDBIcon flag="es" fas /> Español
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <MDBIcon flag="ru" fas /> Русский
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <MDBIcon flag="pt" fas /> Português
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <MDBDropdown>
              <MDBDropdownToggle
                style={{ cursor: "pointer" }}
                tag="a"
                className="nav-link hidden-arrow d-flex align-items-center"
              >
                <img
                  src="/lookslikeafunderpicture.png"
                  className="rounded-circle"
                  style={{ height: 22 }}
                  alt=""
                />
              </MDBDropdownToggle>
              <MDBDropdownMenu style={{ zIndex: 1060 }}>
                <MDBDropdownItem link href="http://localhost:3000/user-profile">
                  My profile
                </MDBDropdownItem>
                <MDBDropdownItem
                  link
                  href="http://localhost:3000/login-register"
                >
                  Logout
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}
