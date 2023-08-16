import { Link, useNavigate } from "react-router-dom";
// import UserForm from "../components/UserForm";
import { useEffect, useState } from "react";
import axios from "axios";



const Home = () => {
    const naviagte = useNavigate()
    const [userdata, setUserdata] = useState([])
    const [filterval, setfilterval] = useState('')
    const [searachApi, setsearachApi] = useState([])
    const [isLoding, setisLoding] = useState(false)

    useEffect(() => {
        fetchdata()

    }, []);

    const fetchdata = async () => {
        setisLoding(true)
        const { data } = await axios.get("https://64dc8e16e64a8525a0f6ae6f.mockapi.io/users");
        setsearachApi(data)
        setUserdata(data)
        setisLoding(false)
    }

    const handelfilter = (event) => {
        setfilterval(event.target.value)

        if (event.target.value === " ") {
            return
        } else {
            const searchFilter = searachApi.filter((item) => item.firstName.toLowerCase().includes(event.target.value.toLowerCase()))
            setUserdata(searchFilter)
        }
    }

    const textResut = () => {
        setfilterval('')
        fetchdata()
    }
    const deletUser = async (id) => {
        try {
            let confirmdel = window.confirm("ary you sure...")
            if (confirmdel) {
                await axios.delete(`https://64dc8e16e64a8525a0f6ae6f.mockapi.io/users/${id}`)
            }
            fetchdata()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mt-5 home">

            <div className="d-flex mb-3 justify-content-between align-items-center">
                <div className="d-flex">
                    <input className='form-control ' value={filterval} onChange={(e) => handelfilter(e)} />
                    <button className="btn btn-success ms-2" >search</button>
                    <button onClick={() => textResut()} className="btn btn-dark ms-2"  >Reset</button>
                </div>
                <div>
                    <Link to={'/users-create'}> <button
                        // onClick={() => SetisOpen(true)}
                        className="btn btn-primary text-white">
                        Add User
                    </button></Link>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Designation</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isLoding ? <h1>Loading.....</h1> :
                            userdata?.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>

                                    <td>{user.email}</td>
                                    <td>{user.phoneNumber}</td>
                                    <td>{user.designation}</td>

                                    <td>
                                        {/* <Link to={}> */}
                                        <button onClick={() => {
                                            naviagte(`/users`, {
                                                state: user
                                            })
                                        }} className="btn btn-info me-2">View</button>

                                        <button className="btn btn-danger me-2" onClick={() => {
                                            deletUser(user.id)
                                        }}>Delete</button>
                                        <Link to={`/edit/${user.id}`}>
                                            <button className="btn btn-warning"
                                            >Edit</button>  </Link>
                                    </td>
                                </tr>
                            ))

                    }
                </tbody>
            </table>
        </div>
    )
};

export default Home;
