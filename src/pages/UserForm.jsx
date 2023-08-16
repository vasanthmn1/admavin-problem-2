import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Form, Button, Row, Container, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';



const UserForm = () => {
    // { handleCreateUser, SetisOpen }
    const [isLoding, setisLoding] = useState(false)

    let navigate = useNavigate()

    const myFormik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            designation: "",
            password: "",
        },
        validate: (value) => {
            let err = {}
            if (!value.firstName) {
                err.firstName = "enter FistName"
            }
            if (!value.lastName) {
                err.lastName = "enter lastname"
            }
            if (!value.email) {
                err.email = "enter email"
            }
            if (!value.phoneNumber) {
                err.phoneNumber = "enter phoneNumber"
            }
            if (!value.designation) {
                err.designation = "enter designation"
            }
            if (!value.password) {
                err.password = "enter password"
            }
            return err

        },
        onSubmit: async (val) => {
            try {
                setisLoding(true)
                await axios.post(`https://64dc8e16e64a8525a0f6ae6f.mockapi.io/users`, val)
                navigate('/')
            } catch (error) {
                console.log(error)
            }

        }
    })
    return (
        <Container className='form_form' style={{ border: "1px solid #000" }}>
            <h6 className=' my-4 '>UserInformation</h6>
            <Form onSubmit={myFormik.handleSubmit}>
                <Row className=''>

                    <Col lg="4">
                        <Form.Group controlId="firstName" >
                            <Form.Label>firstName</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                className='form-control'
                                value={myFormik.values.firstName}
                                onChange={myFormik.handleChange} />
                        </Form.Group>
                        <span className='text-danger' >{myFormik.errors.firstName}</span>
                    </Col>
                    <Col lg="4">
                        <div >
                            <Form.Label>lastName</Form.Label>
                            <input type="text"
                                className='form-control'
                                name="lastName"
                                value={myFormik.values.lastName}
                                onChange={myFormik.handleChange} />
                            <span className='text-danger' >{myFormik.errors.lastName}</span>
                        </div>

                    </Col>
                    <Col lg="4">
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={myFormik.values.email}
                                onChange={myFormik.handleChange} />
                        </Form.Group>
                        <span className='text-danger' >{myFormik.errors.email}</span>
                    </Col>

                    <Col lg="4">

                        <Form.Group controlId="contactNumber">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control
                                type="tel"
                                name="phoneNumber"
                                value={myFormik.values.phoneNumber}
                                onChange={myFormik.handleChange} />
                        </Form.Group>
                        <span className='text-danger' >{myFormik.errors.phoneNumber}</span>
                    </Col>
                    <Col lg="4">
                        <Form.Group controlId="designation">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control
                                type="text"
                                name="designation"
                                value={myFormik.values.designation}
                                onChange={myFormik.handleChange} />
                        </Form.Group>
                        <span className='text-danger' >{myFormik.errors.designation}</span>
                    </Col>
                    <Col lg="4">
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={myFormik.values.password}
                                onChange={myFormik.handleChange} />
                        </Form.Group>
                        <span className='text-danger' >{myFormik.errors.password}</span>
                    </Col>



                    <div className='mb-3 mt-4'>
                        <Button
                            disabled={isLoding}
                            className='' variant="primary" type="submit">
                            Submit
                        </Button>
                        <Link to={'/'}>
                            <Button

                                // onClick={() => SetisOpen(false)}
                                className=' ms-3' variant="dark">
                                cancel
                            </Button>
                        </Link>

                    </div>
                </Row>
            </Form>
        </Container>
    );
};

export default UserForm;
