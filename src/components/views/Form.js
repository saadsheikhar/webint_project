import React, { useState} from "react";
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBCardHeader,
  MDBCardBody,
  MDBTabsContent,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCollapse,
  MDBCardFooter,
  MDBProgress,
  MDBProgressBar,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
} from "mdb-react-ui-kit";

const Test = () => {
  const [showShow, setShowShow] = useState(false);

  const toggleShow = () => setShowShow(!showShow);

  const [bottomModal, setBottomModal] = useState(false);

  const toggleShow2 = () => setBottomModal(!bottomModal);

  return (
    <div>
      <section>
        <div className="bgcol">
          <MDBContainer className="form-first-part">
            <MDBRow>
              <MDBCol md="7">
                <div className="head-title">
                  Select, adjust and generate your templates to{" "}
                  <span className="emphasecolor">build your own website</span>
                </div>
                <div className="sub-head-title">
                  Compute your website using the power of our technology
                </div>
                <MDBBtn
                  outline
                  rounded
                  rippleColor="primary"
                  size="lg"
                  tag="a"
                  href="/help"
                >
                  How to use
                </MDBBtn>
              </MDBCol>

              <MDBCol md="5">
                <div>
                  <img
                    src="/form_img2.svg"
                    alt="form-top-image"
                    className="form-top-image"
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </section>
      <section>
        <div className="form-begin">
          <MDBContainer>
            <div className="form-head-title">
              <h1>How are you feeling today ?</h1>
            </div>
            <div className="form-choice">
              <MDBRow>
                <MDBCol className="md=6 text-center">
                  <MDBBtn
                    outline
                    rounded
                    rippleColor="primary"
                    size="lg"
                    onClick={toggleShow}
                    className="text-center"
                  >
                    I choose my own options
                  </MDBBtn>
                </MDBCol>
                <MDBCol className="md=6 text-center">
                  <MDBBtn
                    outline
                    rounded
                    rippleColor="primary"
                    size="lg"
                    tag="a"
                    href="/result"
                  >
                    I am feeling lucky
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBContainer>
        </div>
      </section>
      <section>
        <MDBCollapse show={showShow}>
          <MDBContainer className="mb-5" id="question1">
            <div className="question1">
              <MDBRow>
                <MDBCol md="7">
                  <div className="question-card">
                    <MDBCard>
                      <MDBCardHeader tag="h5">
                        {" "}
                        Choose a name for you brand new website!
                      </MDBCardHeader>
                      <MDBCardBody className="p-4">
                        <MDBTabsContent>
                          <form>
                            <MDBContainer className="d-grid gap-2">
                              <MDBInput
                                label="My website"
                                id="typeText"
                                type="text"
                              />
                              <MDBBtn
                                outline
                                rounded
                                className="text-center"
                                tag="a"
                                href="#question2"
                              >
                                I will go with this name
                              </MDBBtn>
                            </MDBContainer>
                          </form>
                        </MDBTabsContent>
                      </MDBCardBody>
                      <MDBCardFooter>
                        <MDBProgress>
                          <MDBProgressBar
                            striped
                            animated
                            width="25"
                            valuemin={0}
                            valuemax={100}
                          />
                        </MDBProgress>
                      </MDBCardFooter>
                    </MDBCard>
                  </div>
                </MDBCol>
                <MDBCol md="5">
                  <div className="question-help">
                    <MDBCard>
                      <MDBCardBody className="p-2">
                        <MDBCardHeader tag="h5">
                          <img
                            src="/undraw_heart.svg"
                            className="heart-img"
                            alt="hearttips"
                          />{" "}
                          Tips!
                        </MDBCardHeader>

                        <MDBTabsContent>
                          While this may seem like an obvious tip, your domain
                          name should be identical to your brand, or as close to
                          it as possible. Otherwise, Internet users who enter
                          your domain name and end up on a website with a
                          different name may feel lost.
                        </MDBTabsContent>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBContainer>

          <MDBContainer className="mb-5" id="question2">
            <div className="question2">
              <MDBRow>
                <MDBCol md="7">
                  <div className="question-card">
                    <MDBCard>
                      <MDBCardHeader tag="h5">
                        What kind of website do you want to build ?
                      </MDBCardHeader>
                      <MDBCardBody className="p-4">
                        <MDBTabsContent>
                          <form>
                            <MDBContainer className="d-grid gap-2">
                              <MDBBtn outline rounded tag="a" href="#question3">
                                A blog
                              </MDBBtn>

                              <MDBBtn outline rounded tag="a" href="#question3">
                                A website for professional purposes
                              </MDBBtn>

                              <MDBBtn outline rounded tag="a" href="#question3">
                                E-commerce
                              </MDBBtn>

                              <MDBBtn outline rounded tag="a" href="#question3">
                                A Portfolio
                              </MDBBtn>
                            </MDBContainer>
                          </form>
                        </MDBTabsContent>
                      </MDBCardBody>
                      <MDBCardFooter>
                        <MDBProgress>
                          <MDBProgressBar
                            striped
                            animated
                            width="50"
                            valuemin={0}
                            valuemax={100}
                          />
                        </MDBProgress>
                      </MDBCardFooter>
                    </MDBCard>
                  </div>
                </MDBCol>
                <MDBCol md="5">
                  <div className="question-help">
                    <MDBCard>
                      <MDBCardBody className="p-2">
                        <MDBCardHeader tag="h5">
                          <img
                            src="/undraw_heart.svg"
                            className="heart-img"
                            alt="hearttips"
                          />{" "}
                          Tips!
                        </MDBCardHeader>
                        <MDBTabsContent>
                          You have to identify the type of website you want to
                          create. Websites come in all shapes and sizes. Here
                          you can choose the most common one.
                        </MDBTabsContent>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBContainer>

          <MDBContainer className="mb-5" id="question3">
            <div className="question3">
              <MDBRow>
                <MDBCol md="7">
                  <div className="question-card">
                    <MDBCard>
                      <MDBCardHeader tag="h5">
                        {" "}
                        Do you need front-end, back-end or both of them?
                      </MDBCardHeader>
                      <MDBCardBody className="p-4">
                        <MDBTabsContent>
                          <form>
                            <MDBContainer className="d-grid gap-2">
                              <MDBBtn outline rounded tag="a" href="#question4">
                                Front-end only
                              </MDBBtn>

                              <MDBBtn outline rounded tag="a" href="#question4">
                                Back-end only
                              </MDBBtn>

                              <MDBBtn
                                outline
                                rounded
                                tag="a"
                                onClick={toggleShow2}
                              >
                                Both of them
                              </MDBBtn>
                              <MDBModal
                                animationDirection="bottom"
                                show={bottomModal}
                                tabIndex="-1"
                                setShow={setBottomModal}
                              >
                                <MDBModalDialog position="top" frame>
                                  <MDBModalContent>
                                    <MDBModalBody className="py-1">
                                      <div className="d-flex justify-content-center align-items-center my-3">
                                        <p className="mb-0">
                                          You are lucky! Since you are a very
                                          special customer this feature is free.
                                        </p>
                                        <MDBBtn
                                          color="success"
                                          size="sm"
                                          className="ms-2"
                                          onClick={toggleShow2}
                                          tag="a"
                                          href="#question4"
                                        >
                                          Ok, thanks
                                        </MDBBtn>
                                        <MDBBtn
                                          size="sm"
                                          className="ms-2"
                                          tag="a"
                                          href="/help"
                                        >
                                          Learn more
                                        </MDBBtn>
                                      </div>
                                    </MDBModalBody>
                                  </MDBModalContent>
                                </MDBModalDialog>
                              </MDBModal>

                              <MDBBtn outline rounded tag="a" href="#question4">
                                None of them
                              </MDBBtn>
                            </MDBContainer>
                          </form>
                        </MDBTabsContent>
                      </MDBCardBody>
                      <MDBCardFooter>
                        <MDBProgress>
                          <MDBProgressBar
                            striped
                            animated
                            width="75"
                            valuemin={0}
                            valuemax={100}
                          />
                        </MDBProgress>
                      </MDBCardFooter>
                    </MDBCard>
                  </div>
                </MDBCol>
                <MDBCol md="5">
                  <div className="question-help">
                    <MDBCard>
                      <MDBCardBody className="p-2">
                        <MDBCardHeader tag="h5">
                          {" "}
                          <img
                            src="/undraw_heart.svg"
                            className="heart-img"
                            alt="hearttips"
                          />{" "}
                          Tips!
                        </MDBCardHeader>
                        <MDBTabsContent>
                          Front end development is programming which focuses on
                          the visual elements of a website or app that a user
                          will interact with (the client side). Meanwhile, back
                          end development focuses on the side of a website users
                          can't see (the server side).
                        </MDBTabsContent>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBContainer>

          <MDBContainer className="mb-5" id="question4">
            <div className="question4">
              <MDBRow>
                <MDBCol md="7">
                  <div className="question-card">
                    <MDBCard>
                      <MDBCardHeader tag="h5">
                        {" "}
                        What do you want to include in it ?
                      </MDBCardHeader>
                      <MDBCardBody className="p-4">
                        <MDBTabsContent>
                          <form>
                            <MDBContainer className="d-grid gap-2">
                              <MDBCheckbox
                                name="flexCheck"
                                value=""
                                id="flexCheckDefault1"
                                label="Images"
                              />
                              <MDBCheckbox
                                name="flexCheck"
                                value=""
                                id="flexCheckChecked2"
                                label="Videos"
                              />
                              <MDBCheckbox
                                name="flexCheck"
                                value=""
                                id="flexCheckDefault3"
                                label="Maps"
                              />
                              <MDBCheckbox
                                name="flexCheck"
                                value=""
                                id="flexCheckChecked4"
                                label="Music"
                              />
                            </MDBContainer>
                          </form>
                        </MDBTabsContent>
                      </MDBCardBody>
                      <MDBCardFooter>
                        <MDBProgress>
                          <MDBProgressBar
                            striped
                            animated
                            width="100"
                            valuemin={0}
                            valuemax={100}
                          />
                        </MDBProgress>
                      </MDBCardFooter>
                    </MDBCard>
                  </div>
                </MDBCol>
                <MDBCol md="5">
                  <div className="question-help">
                    <MDBCard>
                      <MDBCardBody className="p-2">
                        <MDBCardHeader tag="h5">
                          {" "}
                          <img
                            src="/undraw_heart.svg"
                            className="heart-img"
                            alt="hearttips"
                          />{" "}
                          Tips!
                        </MDBCardHeader>
                        <MDBTabsContent>
                          There's a lot more to your website design than just
                          the words. In fact, images and videos are some of the
                          most important tools in your marketing arsenal.
                        </MDBTabsContent>
                      </MDBCardBody>
                    </MDBCard>
                  </div>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBContainer>

          <MDBContainer className="pb-4 text-center">
            <MDBBtn
              outline
              rounded
              rippleColor="primary"
              size="lg"
              tag="a"
              href="/result"
            >
              Last step to make it!
            </MDBBtn>
          </MDBContainer>
        </MDBCollapse>
      </section>
    </div>
  );
};

export default Test;
