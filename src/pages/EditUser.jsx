import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getuser()
    }, [])

    const getuser = async () => {
        let data = await axios.get(`https://64dc8e16e64a8525a0f6ae6f.mockapi.io/users/${id}`)
        myFormik.setValues((data.data))

    }

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
                err.lastName = "XXXXXXXXXXXXXX"
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
                err.password = "XXXXXXXXXXXXXX"
            }
            return err

        },
        onSubmit: async (val) => {
            try {

                await axios.put(`https://64dc8e16e64a8525a0f6ae6f.mockapi.io/users/${id}`, val)
                navigate('/')
            } catch (error) {
                console.log(error)
            }

        }
    })


    return (
        <div className="container mt-5">
            <h2>Edit User</h2>
            <form onSubmit={myFormik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"

                        name="firstName"
                        value={myFormik.values.firstName}
                        onChange={myFormik.handleChange}
                    />
                    <span className='text-danger' >{myFormik.errors.firstName}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={myFormik.values.lastName}
                        onChange={myFormik.handleChange}
                    />
                    <span className='text-danger' >{myFormik.errors.lastName}</span>

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={myFormik.values.email}
                        onChange={myFormik.handleChange}
                    />
                    <span className='text-danger' >{myFormik.errors.email}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                    <input
                        type="text"
                        className="form-control"

                        name="phoneNumber"
                        value={myFormik.values.phoneNumber}
                        onChange={myFormik.handleChange}
                    />
                    <span className='text-danger' >{myFormik.errors.phoneNumber}</span>
                </div>
                <div className="mb-3">
                    <label htmlFor="designation" className="form-label">Designation</label>
                    <input
                        type="text"
                        className="form-control"
                        id="designation"
                        name="designation"

                        value={myFormik.values.designation}
                        onChange={myFormik.handleChange}
                    />
                    <span className='text-danger' >{myFormik.errors.designation}</span>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Update
                </button>
                <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => navigate("/")}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EditUser;
