import React, { useState } from 'react';
import Nav from '../core/Nav';
import Footer from '../core/Footer';
import { isAutheticated } from '../auth/helper';
import { Link } from 'react-router-dom';
import { createCategory } from './helper/adminapicall';







const AddCategory = () => {


    const [name, setName] = useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)


    const { user, token } = isAutheticated();

    const goBack = () => {
        return (
            <div className="mt-3">
                <Link className="btn btn-sm btn-info mb-3" to="/admin/dashboard">Admin Home</Link>
            </div>
        )
    }

    const handleChange = event => {
        setError("");
        setName(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setError("")
        setSuccess(false)


        createCategory(user._id, token, { name })
            .then(data => {
                if (data.error) {
                    setError(true)
                } else {
                    setError("")
                    setSuccess(true);
                    setName("");
                }
            });
    }

    const successMessage = () => {
        if(success){
            return <h4 className='text-succcess'>Category created Successfully </h4>
        }
    }

    const warningMessage = () => {
        if(error){
            return <h4 className='text-succcess'>Failed to Create Category </h4>
        }
    }


const myCategoryForm = () => {
    return (
        <form>
            <div className='form-group'>
                <p className="lead">Enter the Category</p>
                <input type="text" className="form-control my-3" onChange={handleChange} value={name} autoFocus
                    required placeholder='ex. Summer' />
            </div>
            <button className="btn btn-outline-info" onClick={onSubmit}>Crete Category</button>
        </form>
    )
}

return (<div>
    <Nav />
    <div className="container p-4">
        <div className='row bg-warning rounded '>
            <div className='col-md-8 offset-md-2 col-12'>
                {successMessage()}
                {warningMessage()}
                {myCategoryForm()}
                {goBack()}
            </div>
        </div>
    </div>
    <Footer />
</div>
)
}

export default AddCategory;
