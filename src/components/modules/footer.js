import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted my-5"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block"></div>

        <div>
          <a
            href="https://www.facebook.com/profile.php?id=100054778969394"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="https://twitter.com/soitepsilon" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a
            href="https://instagram.com/soitepsilon?igshid=ZDdkNTZiNTM="
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/saad-sheikh-88729b1bb/"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Swadi
              </h6>
              <p>
                The SWADI website builder offers a complete solution from
                enterprise-grade infrastructure and business features to
                advanced SEO and marketing tools-enabling anyone to create and
                grow online.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Ueful links</h6>
              <p>
                <a
                  href="https://github.com/elgharmaoui/DreamTeamRepo"
                  className="text-reset"
                >
                  Github
                </a>
              </p>
              <p>
                <a
                  href="https://www.youtube.com/watch?v=ZxKM3DCV2kE"
                  className="text-reset"
                >
                  Minimal required skills
                </a>
              </p>

              <p>
                <a href="/help" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                450 Route des Chappes, BIOT
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                <a href="mailto:swadi@eurecom.fr">swadi@eurecom.fr </a>
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +33 (0)4 93 00 81 00
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +33 (0)4 93 00 82 00
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
