import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalHeader,
  MDBModalDialog,
  MDBDatepicker,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { MDBFileUpload } from "mdb-react-file-upload";

function UserProfile() {
  const [gridModal, setGridModal] = useState(false);
  const toggleShow = () => setGridModal(!gridModal);
  const [bottomModal, setBottomModal] = useState(false);
  const toggleShowBottom = () => setBottomModal(!bottomModal);

  return (
    <MDBContainer>
      <h1 className="h5 text-center py-5 mb-0">User profile</h1>

      <MDBModal
        animationDirection="bottom"
        show={bottomModal}
        tabIndex="-1"
        setShow={setBottomModal}
      >
        <MDBModalDialog position="bottom" frame>
          <MDBModalContent>
            <MDBModalBody className="py-1">
              <div className="d-flex justify-content-center align-items-center my-3">
                <p className="mb-0">
                  Do you authorize download from our website ?
                </p>
                <MDBBtn
                  color="success"
                  size="sm"
                  className="ms-2"
                  onClick={toggleShowBottom}
                  tag="a"
                  href="http://localhost:3000/some_file.txt"
                  download
                >
                  Yes I authorize you
                </MDBBtn>
                <MDBBtn size="sm" className="ms-2" onClick={toggleShowBottom}>
                  No thank you
                </MDBBtn>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <MDBModal tabIndex="-1" show={gridModal} setShow={setGridModal}>
        <MDBModalDialog size="lg">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBBtn
                type="button"
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBRow>
                <MDBCol>
                  <div className="text-white">
                    <img
                      src="http://localhost:3000/premium.jpg"
                      className="img-fluid hover-shadow rounded"
                      alt=""
                    />
                  </div>
                  <MDBRow>
                    <MDBCol>
                      <div className="d-flex justify-content-center align-items-center h-100 p-5 text-center">
                        <h6>Premium is yours for 15.99 $/month</h6>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>

                <br></br>
                <MDBCol>
                  <div className="text-center">
                    <h3>
                      <b>SWADI Premium</b>
                    </h3>
                  </div>
                  <br></br>
                  <MDBInput label="Email" id="typeEmail" type="email" />
                  <br></br>
                  <MDBInput
                    label="Card number"
                    type="text"
                    pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}"
                  />
                  <br></br>
                  <MDBRow>
                    <MDBCol>
                      <MDBDatepicker
                        format="MM/yyyy"
                        label="(MM/YY)"
                      ></MDBDatepicker>
                    </MDBCol>
                    <MDBCol>
                      <MDBInput label="CVV" type="text" />
                    </MDBCol>
                  </MDBRow>
                  <br></br>
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="I accept the terms and conditions"
                  />

                  <MDBBtn
                    rippleCentered="true"
                    color="primary"
                    size="lg"
                    className="my-3"
                  >
                    GET PREMIUM
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      <section>
        <MDBRow>
          <MDBCol md="6" className="mb-4 mb-md-0">
            <MDBCard>
              <MDBCardHeader className="card-header py-3 ">
                <strong>Edit profile</strong>
              </MDBCardHeader>
              <MDBCardBody className="text-center">
                <div className="mb-3">
                  <strong>Profile photo</strong>
                </div>

                <form action="">
                  <div className="d-flex justify-content-center mb-4">
                    <MDBFileUpload defaultFile="/lookslikeafunderpicture.png" />
                  </div>
                  <MDBInput
                    className="mb-4"
                    label="Name"
                    defaultValue="Zakaria"
                  />

                  <MDBInput
                    type="email"
                    className="mb-4"
                    label="Email"
                    defaultValue="johndoe@gmail.com"
                  />

                  <MDBInput
                    className="mb-4"
                    label="Name"
                    defaultValue="Founder"
                  />

                  <MDBBtn type="button" className="mb-2">
                    Update profile
                  </MDBBtn>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="6" className="mb-5 mb-md-0">
            <MDBCard className="card">
              <div className="card-body text-center">
                <img
                  className="rounded-circle shadow-1 mb-3"
                  src="/lookslikeafunderpicture.png"
                  alt="avatar"
                  style={{ width: "150px" }}
                />

                <p className="mb-1">
                  <strong>Zakaria</strong>
                </p>
                <p className="mb-2">
                  <small>Founder</small>
                </p>
                <div className="d-flex justify-content-center align-items-center h-100 p-2 text-center">
                  <MDBBtn
                    rippleCentered="true"
                    color="primary"
                    size="lg"
                    className="my-3"
                  >
                    {" "}
                    UPDATE PREMIUM{" "}
                  </MDBBtn>
                </div>
              </div>
            </MDBCard>
            <MDBCard className="mt-5">
              <MDBCardHeader className="py-3">
                <strong>Change password</strong>
              </MDBCardHeader>
              <MDBCardBody className="text-center pt-4">
                <form action="">
                  <MDBInput className="mb-4" label="New password" />
                  <MDBInput className="mb-4" label="Confirm password" />

                  <MDBBtn type="button" className="mb-2">
                    Apply
                  </MDBBtn>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </section>
      <MDBRow></MDBRow>

      <h1 style={{ fontWeight: "bold" }} className="text-center my-5">
        Your projects
      </h1>

      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template-md.png"
              alt="..."
              position="top"
              className="img-fluid shadow-4 h-50"
            />
            <MDBCardBody>
              <MDBCardTitle>Project 1</MDBCardTitle>
              <MDBCardText>Description of the project 1</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter className="text-center">
              <MDBBtn onClick={toggleShowBottom}>Download</MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://s.tmimgcdn.com/scr/1200x750/52500/free-responsive-corporate-template-website-template_52524-0-original.jpg"
              alt="..."
              position="top"
              className="img-fluid shadow-4 h-50"
            />
            <MDBCardBody>
              <MDBCardTitle>Project 2</MDBCardTitle>
              <MDBCardText>Description of the project 2</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter className="text-center">
              <MDBBtn onClick={toggleShowBottom}>Download</MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://themeforest.img.customer.envatousercontent.com/files/428495372/02_theme-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=5462b5819aaafc27dd38a5cc213e3f2a"
              alt="..."
              position="top"
              className="img-fluid shadow-4 h-50"
            />
            <MDBCardBody>
              <MDBCardTitle>Project 3</MDBCardTitle>
              <MDBCardText>Description of the project 3</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter className="text-center">
              <MDBBtn onClick={toggleShowBottom}>Download</MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://themewagon.com/wp-content/uploads/2020/10/aievari.jpg"
              alt="..."
              position="top"
              className="img-fluid shadow-4 h-60"
            />
            <MDBCardBody>
              <MDBCardTitle>Project 4</MDBCardTitle>
              <MDBCardText>Description of the project 4</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter className="text-center">
              <MDBBtn onClick={toggleShowBottom}>Download</MDBBtn>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default UserProfile;
