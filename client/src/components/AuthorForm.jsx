import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const AuthorForm = () => {

    const [name,setName] = useState("");
    const [errors,setErrors] = useState([]);
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/authors",{name})
            .then(response => navigate("/"))
            .catch(err =>{setErrors(err.response.data.errors)})
    }

    return (
        <div className="APP">
            <h2 className="mb-3">Add a new Author!</h2>
            <Link to={"/"}>Home</Link>
            <form className="mt-5" onSubmit={onSubmitHandler}>
                {     errors.name?
                        <p className="text-danger">{errors.name.message}</p>
                        :null
                }
                <div>
                    <label>Author Name: </label>
                    <input className="ms-3" type="text" onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <Link to="/" className="mt-3 me-2 btn btn-danger">Cancel</Link> <input className="ms-2 mt-3 btn btn-primary" type="submit" value="Add Author"/>
            </form>
        </div>
    )
}

export default AuthorForm