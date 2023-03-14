import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";



const Home = (props) => {

    const navigate = useNavigate();
    const [authorList,setAuthorList] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then(response => setAuthorList(response.data.authors))
            .catch(err => console.log(err))
    },[])

    const deleteAuthor = (authorId)=>{
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then(res =>{
                setAuthorList(authorList.filter(author => author._id != authorId))
            })
            .catch(err => console.log(err))

    }



    return (
        <div className="APP ">
            <h1>Favorite Authors</h1>
            <Link className="mt-2" to={'/authors/new'}>Add a New Author</Link>
            <h4 className="mt-2">We have quotes by:</h4>
                <table className="table w-50 mx-auto mt-4">
                    <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        authorList.map((author,index) => {
                            return(
                                <tr key={author._id}>
                                    <td>{author.name}</td>
                                    <td><Link to={`/authors/${author._id}`} className="btn btn-primary">Edit</Link> | <button className="btn btn-danger" onClick={(e)=>{deleteAuthor(author)}}>Delete</button></td>
                                </tr>

                            )
                        })
                    }
                    </tbody>
                </table>
        </div>
    )
}

export default Home