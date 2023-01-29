import React, { useState } from "react";
import "./Help.css";
import {
  MDBContainer,
  MDBAccordion,
  MDBAccordionItem,
  MDBInput,
  MDBTextArea,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBModalContent,
  MDBModalDialog,
  MDBModalTitle,
} from "mdb-react-ui-kit";

const Help = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    validation();
  };
  const [basicModal, setBasicModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [state, setState] = useState({});
  const handleChange = (event) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };
  const toggleShow = () => setBasicModal(!basicModal);
  var expressionReguliere =
    /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

  const validation = () => {
    setValidated(
      state.firstname.length > 0 &&
        state.lastname.length > 0 &&
        state.feedback.length > 0 &&
        expressionReguliere.test(state.email)
    );
    setBasicModal(true);
  };

  return (
    <div className="col-12">
      <MDBModal
        show={basicModal && validated}
        setShow={setBasicModal}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Thank you for your input!</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Your feedback was sent to our teams.</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <div className="bg">
        <br />
        <section className="my-5 text-center">
          <h1 className="display-1">How to use SWADI</h1>
          <br></br>
          <h3>Watch our YouTube tutorial</h3>
          <div className="ratio-ratio-16x9">
            <iframe
              width="934"
              height="525"
              src="https://www.youtube.com/embed/GCUU33MAAlA"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </section>
        <br></br>
      </div>

      <MDBContainer>
        <br></br>
        <h4 className="mb-4">Frequently Asked Questions</h4>
        <section className="mb-4">
          <MDBAccordion initialActive={1}>
            <MDBAccordionItem
              collapseId={1}
              className="py-3"
              headerTitle="What is SWADI?"
            >
              <span className="accordion"></span>SWADI is a Self Web App
              Development Interface that you can use to build web interfaces.
              You only have to answer a form about how you want your website to
              look like and we will generate a template in HTML/CSS.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={2}
              className="py-3"
              headerTitle="I do not really know what I want. Can SWADI generate a random template?"
            >
              Yes, it can. On the form page, select the "I am feeling lucky"
              option. SWADI will generate 3 random templates for you to choose
              from.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={3}
              className="py-3"
              headerTitle="Can I use SWADI to develop an app for my job?"
            >
              Sure, you can! SWADI is a tool that you can use to save time in
              the development process.
            </MDBAccordionItem>
            <MDBAccordionItem
              collapseId={4}
              className="py-3"
              headerTitle="Can I deploy my web application with SWADI?"
            >
              Yes, it is possible. However, you have to get a premium account to
              unlock this feature.
            </MDBAccordionItem>
          </MDBAccordion>
        </section>

        <section className="my-5 text-center">
          <MDBRow>
            <MDBCol md="6">
              <p>Any suggestions? Contact us and express your needs!</p>

              <form
                onSubmit={(event) => {
                  handleSubmit(event);
                }}
              >
                <MDBInput
                  className="my-3"
                  required
                  id="firstname"
                  value={state.firstname}
                  label="First name *"
                  onChange={handleChange}
                />

                <MDBInput
                  className="my-3"
                  required
                  id="lastname"
                  value={state.lastname}
                  label="Last name *"
                  onChange={handleChange}
                />

                <MDBInput
                  className="my-3"
                  type="email"
                  id="email"
                  value={state.email}
                  required
                  label="E-mail *"
                  onChange={handleChange}
                />

                <MDBTextArea
                  className="my-3"
                  label="Your feedback *"
                  id="feedback"
                  value={state.feedback}
                  required
                  onChange={handleChange}
                />

                <MDBCol center>
                  <MDBBtn type="submit">Submit form</MDBBtn>
                </MDBCol>
              </form>
            </MDBCol>
            <MDBCol md="6">
              <img
                src="/feedback.svg"
                alt="feedback-image"
                width="700"
                height="393"
              />
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    </div>
  );
};

export default Help;
