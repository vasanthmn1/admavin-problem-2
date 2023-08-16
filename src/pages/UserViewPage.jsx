
import { Col, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const UserViewPage = () => {

    const location = useLocation()
    const user = location.state


    return (
        <div className='container userlist mt-5 p-4' style={{ border: "1px solid black", }}>
            <h6 className='mb-4'><b>User Information</b></h6>
            <Row>
                <Col lg='4'>
                    <p>First Name</p>
                    <p> {user.firstName}</p>

                </Col>
                <Col lg='4'>
                    <p>Last Name </p>
                    <p>{user.lastName}</p>
                </Col>

                {/*  */}
                <Col lg='4'>
                    <p>Email</p>
                    <p>{user.email}</p>
                </Col>

                <Col lg='4 mt-3'>
                    <p>Phone Number</p>
                    <p>{user.phoneNumber}</p>
                </Col>
                <Col lg='4 mt-3'>
                    <p>Designation</p>
                    <p>{user.designation}</p>
                </Col>
                <Col lg='4 mt-3'>
                    <p>Password</p>
                    <p>{user.password}</p>
                </Col>
            </Row>





        </div>
    );
};

export default UserViewPage;
