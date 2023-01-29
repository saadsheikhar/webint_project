import React, {useState} from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCardImage,
    MDBCardTitle,
    MDBModalDialog, MDBModalContent, MDBModalBody, MDBModal
} from "mdb-react-ui-kit";

const Result = () => {
    const [bottomModal, setBottomModal] = useState(false);

    const toggleShow2 = () => setBottomModal(!bottomModal);
    return (
        <div>
            <section>
                <div className="bg-col-res">
                    <MDBContainer className="form-first-part">
                        <MDBRow>
                            <MDBCol md="7">
                                <div className= "res-head-title">
                                    Congratulation ! You just made <span className="emphasecolor">your own website </span>
                                </div>
                                <div className="sub-head-title">
                                    Download the file just below or log into you account to manage all your projects
                                </div>
                                <MDBRow>
                                    <MDBCol md ="6" className="text-center">
                                        <MDBBtn outline rounded rippleColor="primary" size="lg" onClick={toggleShow2}>
                                            Download
                                        </MDBBtn>

                                        <MDBModal animationDirection='bottom' show={bottomModal} tabIndex='-1' setShow={setBottomModal}>
                                            <MDBModalDialog position='bottom' frame>
                                                <MDBModalContent>
                                                    <MDBModalBody className='py-1'>
                                                        <div className='d-flex justify-content-center align-items-center my-3'>
                                                            <p className='mb-0'>Do you authorize download from our website ?</p>
                                                            <MDBBtn color='success' size='sm' className='ms-2' onClick={toggleShow2}
                                                                    tag="a" href="/some_file.txt" download>
                                                                Yes I authorize you
                                                            </MDBBtn>
                                                            <MDBBtn size='sm' className='ms-2' onClick={toggleShow2}>
                                                                No thank you
                                                            </MDBBtn>
                                                        </div>
                                                    </MDBModalBody>
                                                </MDBModalContent>
                                            </MDBModalDialog>
                                        </MDBModal>

                                    </MDBCol>
                                    <MDBCol md ="6">
                                        <MDBBtn rounded rippleColor="primary" size="lg" tag="a" href="/login-register">
                                            Login
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>


                            <MDBCol md="5">
                                <div className="form-image-top">

                                    <MDBCard className='h-100'>
                                        <MDBCardImage
                                            src='https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template-md.png'
                                            alt='...'
                                            position='top'
                                            className='img-fluid shadow-4 h-50'
                                        />
                                        <MDBCardBody>
                                            <MDBCardTitle className="text-center">My website</MDBCardTitle>
                                        </MDBCardBody>
                                    </MDBCard>
                                </div>
                            </MDBCol>


                        </MDBRow>
                    </MDBContainer>
                </div>
            </section>
            <section>
                <div>
                <MDBContainer>
                    <div className="res-temp-title">
                    Or maybe you prefer <span className="emphasecolor">these</span> :
                    </div>
                    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                        <MDBCol>
                            <MDBCard className='h-100'>
                                <MDBCardImage
                                    src='https://themeforest.img.customer.envatousercontent.com/files/428495372/02_theme-preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=5462b5819aaafc27dd38a5cc213e3f2a'
                                    alt='...'
                                    position='top'
                                    className='img-fluid shadow-4 h-50'

                                />
                                <MDBCardBody className="text-center">
                                    <MDBCardTitle>Template 1</MDBCardTitle>
                                    <MDBCardBody>
                                    <MDBBtn outline rounded rippleColor="primary" size="lg" onClick={toggleShow2}>
                                        Download
                                    </MDBBtn>

                                    <MDBModal animationDirection='bottom' show={bottomModal} tabIndex='-1' setShow={setBottomModal}>
                                        <MDBModalDialog position='bottom' frame>
                                            <MDBModalContent>
                                                <MDBModalBody className='py-1'>
                                                    <div className='d-flex justify-content-center align-items-center my-3'>
                                                        <p className='mb-0'>Do you authorize download from our website ?</p>
                                                        <MDBBtn color='success' size='sm' className='ms-2' onClick={toggleShow2}
                                                                tag="a" href="/some_file.txt" download>
                                                            Yes I authorize you
                                                        </MDBBtn>
                                                        <MDBBtn size='sm' className='ms-2' onClick={toggleShow2}>
                                                        No thank you
                                                        </MDBBtn>
                                                    </div>
                                                </MDBModalBody>
                                            </MDBModalContent>
                                        </MDBModalDialog>
                                    </MDBModal>
                                    </MDBCardBody>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className='h-100'>
                                <MDBCardImage
                                    src='https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template-md.png'
                                    alt='...'
                                    position='top'
                                    className='img-fluid shadow-4 h-50'
                                />
                                <MDBCardBody className="text-center">
                                    <MDBCardTitle>Template 2</MDBCardTitle>
                                <MDBCardBody>
                                    <MDBBtn outline rounded rippleColor="primary" size="lg" onClick={toggleShow2}>
                                        Download
                                    </MDBBtn>

                                        <MDBModal animationDirection='bottom' show={bottomModal} tabIndex='-1' setShow={setBottomModal}>
                                            <MDBModalDialog position='bottom' frame>
                                                <MDBModalContent>
                                                    <MDBModalBody className='py-1'>
                                                        <div className='d-flex justify-content-center align-items-center my-3'>
                                                            <p className='mb-0'>Do you authorize download from our website ?</p>
                                                            <MDBBtn color='success' size='sm' className='ms-2' onClick={toggleShow2}
                                                                    tag="a" href="/some_file.txt" download>
                                                                Yes I authorize you
                                                            </MDBBtn>
                                                            <MDBBtn size='sm' className='ms-2' onClick={toggleShow2}>
                                                            No thank you
                                                            </MDBBtn>
                                                        </div>
                                                    </MDBModalBody>
                                                </MDBModalContent>
                                            </MDBModalDialog>
                                        </MDBModal>
                                    </MDBCardBody>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol>
                            <MDBCard className='h-100'>
                                <MDBCardImage
                                    src='https://themewagon.com/wp-content/uploads/2020/10/aievari.jpg'
                                    alt='...'
                                    position='top'
                                    className='img-fluid shadow-4 h-60'
                                />
                                <MDBCardBody className="text-center">
                                    <MDBCardTitle>Template 3</MDBCardTitle>

                                    <MDBCardBody>


                                        <MDBBtn outline rounded rippleColor="primary" size="lg" onClick={toggleShow2}>
                                            Download
                                        </MDBBtn>

                                        <MDBModal animationDirection='bottom' show={bottomModal} tabIndex='-1' setShow={setBottomModal}>
                                            <MDBModalDialog position='bottom' frame>
                                                <MDBModalContent>
                                                    <MDBModalBody className='py-1'>
                                                        <div className='d-flex justify-content-center align-items-center my-3'>
                                                            <p className='mb-0'>Do you authorize download from our website ?</p>
                                                            <MDBBtn color='success' size='sm' className='ms-2' onClick={toggleShow2}
                                                                    tag="a" href="/some_file.txt" download>
                                                                Yes I authorize you
                                                            </MDBBtn>
                                                            <MDBBtn size='sm' className='ms-2' onClick={toggleShow2}>
                                                            No thank you
                                                            </MDBBtn>
                                                        </div>
                                                    </MDBModalBody>
                                                </MDBModalContent>
                                            </MDBModalDialog>
                                        </MDBModal>
                                    </MDBCardBody>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
                </div>
            </section>
        </div>

    );
}


export default Result;