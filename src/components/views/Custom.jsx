import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBBtn,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCardImage,
  MDBCarousel,
  MDBCarouselItem,
  MDBCardGroup,
  MDBAnimation,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalBody,
  MDBInput,
  MDBCheckbox,
  MDBDatepicker,
} from "mdb-react-ui-kit";

function Custom() {
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);

  const [gridModal, setGridModal] = useState(false);
  const toggleShow = () => setGridModal(!gridModal);

  return (
    <>
      <div
        className="p-2 text-center bg-image"
        style={{
          backgroundImage: "url('/good_smile.jpeg')",
          height: 700,
          maxWidth: 3000,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">
                <b>
                  <font size="+10">BUILD YOUR OWN WEBSITE NOW!</font>
                </b>
              </h1>
              <h4 className="mb-3">
                Create the website of your dreams in just few passages
              </h4>

              <h8>
                SWADI (Self Web App Development Interface) is a platform that
                allows you to create a website in very few passages. <br></br>
              </h8>
              <h8>
                Answer some questions and an AI based software will generate for
                you the website you ever dreamed of.
              </h8>
              <div className="d-flex justify-content-center align-items-center h-100 p-5 text-center">
                <MDBBtn
                  rippleCentered="true"
                  rounded
                  color="light"
                  size="lg"
                  href="/form"
                >
                  START NOW
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MDBContainer breakpoint="xxl">
        <MDBRow>
          <div className="d-flex justify-content-center align-items-center h-100 my-4 text-black">
            <h1 className="mb-3"> What they say about us</h1>
          </div>
        </MDBRow>

        <div style={{ height: 300 }}>
          <MDBRow className="row-cols-1 row-cols-md-3 g-4">
            <MDBCol size="4">
              <MDBCard style={{ maxWidth: "540px" }}>
                <MDBRow className="g-0">
                  <MDBCol md="4">
                    <MDBCardImage
                      className="rounded-circle"
                      src="/lookslikeahappytravaler.jpeg"
                      alt="..."
                      fluid
                      style={{ height: 150, maxWidth: 150 }}
                    />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody>
                      <MDBCardTitle>Océane</MDBCardTitle>
                      <MDBCardText>
                        If someone will ask me a professional feedback about
                        SWADI, I can only say: Incredible!
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>

            <MDBCol size="4">
              <MDBCard style={{ maxWidth: 540 }}>
                <MDBRow className="g-0">
                  <MDBCol md="4">
                    <MDBCardImage
                      className="rounded-circle"
                      src="/lookslikealondoner.jpg"
                      alt="..."
                      fluid
                      style={{ height: 150, maxWidth: 150 }}
                    />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody>
                      <MDBCardTitle>Saad</MDBCardTitle>
                      <MDBCardText>
                        I knew nothing about web programming. With SWADI I
                        managed to start my blog in just few minutes. I still
                        cannot believe it!
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>

            <MDBCol size="4">
              <MDBCard style={{ maxWidth: "540px" }}>
                <MDBRow className="g-0">
                  <MDBCol md="4">
                    <MDBCardImage
                      className="rounded-circle"
                      src="/lookslikehandsomeman.jpeg"
                      alt="..."
                      fluid
                      style={{ height: 150, maxWidth: 150 }}
                    />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody>
                      <MDBCardTitle>Umberto</MDBCardTitle>
                      <MDBCardText>
                        I think that SWADI is a proof of how forward the
                        researches on AI are.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBContainer>

      <MDBContainer className="my-4">
        <div style={{ height: 630 }}>
          <MDBCarousel showControls showIndicators fade>
            <MDBCarouselItem
              className="w-100 d-block"
              itemID={1}
              style={{ height: 630 }}
              src="/thinking2.jpg"
              alt="..."
            >
              <h4>
                <font size="+3">
                  <b>What you want as you want it</b>
                </font>
              </h4>
              <p>
                <font size="+1">
                  Answer few questions about the structure and the content of
                  your website and start your successfull business!
                </font>
              </p>
            </MDBCarouselItem>

            <MDBCarouselItem
              className="w-100 d-block"
              itemID={1}
              style={{ height: 630 }}
              src="/old1.jpeg"
              alt="..."
            >
              <h4>
                <font size="+3">
                  <b>Just make it!</b>
                </font>
              </h4>
              <p>
                <font size="+1">
                  Swadi is AI-based and it will create the perfect website for
                  you in just few clicks! It's fast and easy and if you don't
                  like the result, you can always change it whenever you'd like.
                </font>
              </p>
            </MDBCarouselItem>
            <MDBCarouselItem
              className="w-100 d-block"
              itemID={1}
              style={{ height: 630 }}
              src="/jump2.jpg"
              alt="..."
            >
              <h4>
                <font size="+3">
                  <b>Ever faster with our flash start option!</b>
                </font>
              </h4>
              <p>
                <font size="+1">
                  If you want to start as soon as possible, we can generate a
                  random template for you to work on. Just click on the "I'm
                  feeling lucky" button and start selling your contents. It's
                  even faster!
                </font>
              </p>
            </MDBCarouselItem>
          </MDBCarousel>
        </div>
      </MDBContainer>

      <MDBContainer
        className="my-4 bg-gradient"
        style={{ height: 450, maxWidth: 1295, backgroundColor: "#5a6e85" }}
      >
        <MDBRow>
          <MDBCol size="6">
            <div className="d-flex justify-content-center align-items-center h-100 p-5 text-center">
              <div className="text-white">
                <h1>
                  <b>EASY TO LEARN WITH OUR CUSTOMIZED TUTORIALS</b>
                </h1>

                <p>
                  Learn how to use the SWADI platform with the help of video
                  tutorials, popular FAQs, and a world-wide community that will
                  allow you to be ready to start your successfull business! With
                  our premium subscription, you will also have personal
                  assistance that will listen to your needs and will guide you
                  through all the steps. Try it!
                </p>

                <MDBBtn
                  rippleCentered="true"
                  rounded
                  color="light"
                  size="lg"
                  href="/help"
                >
                  LEARN NOW
                </MDBBtn>
              </div>
            </div>
          </MDBCol>
          <MDBCol size="6">
            <div className="mx-4 my-4 text-white">
              <img
                src="/learn1.jpg"
                className="img-fluid hover-shadow rounded"
                alt=""
              />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <MDBContainer>
        <MDBRow>
          <div className="d-flex justify-content-center align-items-center h-100 my-5">
            <div className="text-black">
              <h1>
                <b>TAKE ADVANTAGE OF OUR PREMIUM FEATURES</b>
              </h1>
            </div>
          </div>
        </MDBRow>
        <MDBCardGroup>
          <MDBCard>
            <MDBCardImage
              src="/save.jpg"
              alt="..."
              position="top"
              onMouseEnter={() => setShowDescription1(true)}
              onMouseLeave={() => setShowDescription1(!showDescription1)}
            />
            {showDescription1 && (
              <MDBAnimation
                animation="slide-in-up"
                duration={500}
                target={showDescription1}
                reset={true}
                start="onHover"
                enableTarget
              >
                <MDBCardBody
                  onMouseEnter={() => setShowDescription1(true)}
                  onMouseLeave={() => setShowDescription1(false)}
                >
                  <MDBCardTitle>
                    <b>Don't worry about deployment</b>
                  </MDBCardTitle>
                  <MDBCardText>
                    With the premium subscription, you will have the possibility
                    of an automatic deployment of your work. As soon as you
                    confirm the final template, you will have the possibility of
                    show it to the rest of the world by selecting the option
                    "Deploy!".
                    <div className="d-flex justify-content-center align-items-center h-100 p-5 text-center">
                      <MDBBtn
                        rippleCentered="true"
                        rounded
                        color="dark"
                        size="lg"
                        onClick={toggleShow}
                      >
                        GET PREMIUM
                      </MDBBtn>
                    </div>
                  </MDBCardText>
                </MDBCardBody>
              </MDBAnimation>
            )}
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="/templates.jpg"
              alt="..."
              position="top"
              onMouseEnter={() => setShowDescription2(true)}
              onMouseLeave={() => setShowDescription2(!showDescription2)}
            />

            {showDescription2 && (
              <MDBAnimation
                animation="slide-in-up"
                duration={500}
                target={showDescription2}
                reset={true}
                start="onHover"
                enableTarget
              >
                <MDBCardBody
                  onMouseEnter={() => setShowDescription2(true)}
                  onMouseLeave={() => setShowDescription2(!showDescription2)}
                >
                  <MDBCardTitle>
                    <b>Save all your templates</b>
                  </MDBCardTitle>
                  <MDBCardText>
                    The premium account will allow you to save all the templates
                    that you will generate, giving you limitless space for your
                    ideas!
                    <div className="d-flex justify-content-center align-items-center h-100 p-5 text-center">
                      <MDBBtn
                        rippleCentered="true"
                        rounded
                        color="dark"
                        size="lg"
                        onClick={toggleShow}
                      >
                        GET PREMIUM
                      </MDBBtn>
                    </div>
                  </MDBCardText>
                </MDBCardBody>
              </MDBAnimation>
            )}
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="/assistance.jpg"
              alt="..."
              position="top"
              onMouseEnter={() => {
                setShowDescription3(!showDescription3);
              }}
              onMouseLeave={() => setShowDescription3(!showDescription3)}
            />
            {showDescription3 && (
              <MDBAnimation
                animation="slide-in-up"
                duration={500}
                target={showDescription3}
                reset={true}
                start="onHover"
                enableTarget
              >
                <MDBCardBody
                  onMouseEnter={() => setShowDescription3(true)}
                  onMouseLeave={() => setShowDescription3(!showDescription3)}
                >
                  <MDBCardTitle>
                    <b>Receive personal assistance</b>
                  </MDBCardTitle>
                  <MDBCardText>
                    The advantage of premium also extends to the helping
                    section. You can start a chat with one of our expert
                    developers that will guide you
                    <div className="d-flex justify-content-center align-items-center h-100 p-5 text-center">
                      <MDBBtn
                        rippleCentered="true"
                        rounded
                        color="dark"
                        size="lg"
                        onClick={toggleShow}
                      >
                        GET PREMIUM
                      </MDBBtn>
                    </div>
                  </MDBCardText>
                </MDBCardBody>
              </MDBAnimation>
            )}
          </MDBCard>
        </MDBCardGroup>

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
                        src="/premium.jpg"
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
                      rounded
                      color="dark"
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
      </MDBContainer>
    </>
  );
}

export default Custom;
