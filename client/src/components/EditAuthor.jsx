import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const EditAuthor = () => {

    const {id} = useParams()
    const [name,setName] = useState("")
    const [errors,setErrors] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response => setName(response.data.author.name))
            .catch(err => setErrors(err.response.data.errors))
    },[])

    const updateHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`,{name})
            .then(response => navigate("/"))
            .catch(err => setErrors(err.response.data.errors))
    }

    return (
        <div className="APP">
            <h2 className="mb-3">Update an Author!</h2>
            <Link to={"/"}>Home</Link>
            <form className="mt-5" onSubmit={updateHandler}>
                {     errors.name?
                    <p className="text-danger">{errors.name.message}</p>
                    :null
                }
                <div>
                    <label>Author Name: </label>
                    <input className="ms-3" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <Link to="/" className="mt-3 me-2 btn btn-danger">Cancel</Link> <input className="ms-2 mt-3 btn btn-primary" type="submit" value="Update Author"/>
            </form>
        </div>
    )
}

export default EditAuthor