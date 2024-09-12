import React, { useState } from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const registerForm = {
    Email: "",
    Username: "",
    Password: "",
}
const isEmptyRegister = (value) => {
    return !value || value.trim().length < 1;
}

const Register = () => {
    // const [register, setRegister] = useState(registerForm)
    // const [formRrror, setFormError] = useState({})
    // const navigate = useNavigate("");

    // const validateFormRegister = () => {
    //     const error = {};

    //     if (isEmptyRegister(register.Password)) {
    //         error["password"] = "Password is required";
    //     }
    //     if (isEmptyRegister(register.Email)) {
    //         error["email"] = "Email is required";
    //     }

    //     setFormError(error);
    //     return Object.keys(error).length === 0;
    // };

    // const handleEmail = (event) => {
    //     const { value } = event.target;
    //     setRegister({
    //         ...register,
    //         Email: value,
    //     });
    // };
    // const handleUsername = (event) => {
    //     const { value } = event.target;
    //     setRegister({
    //         ...register,
    //         Username: value,
    //     });
    // };

    // const handlePassword = (event) => {
    //     const { value } = event.target;
    //     setRegister({
    //         ...register,
    //         Password: value,
    //     });
    // };

    // // const handleInputChange = (event) => {
    // //     const { name, value } = event.target;
    // //     setRegister({
    // //         ...register,
    // //         [name]: value,
    // //     })
    // // }
    // // const handleClickFormRegister = (event) => {
    // //     event.preventDefault();
    // //     if (validateFormRegister()) {
    // //         navigate('/login')
    // //         alert("You have Register successfully logged ! ")
    // //     } else {
    // //         alert("There are errors in the form, please check! ")
    // //     }
    // // }
    // const handleClickFormRegister = async (event) => {
    //     event.preventDefault();
    //     if (validateFormRegister()) {
    //         try {
    //             const response = await fetch('', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify(register)
    //             });
    //             if (response.ok) {
    //                 navigate('/');
    //                 alert("You have registered successfully!");
    //             }
    //         } catch (error) {
    //             alert(`Error: ${error.message}`);
    //         }
    //     } else {
    //         alert("There are errors in the form, please check!");
    //     }
    // };
    const [formRegister, setFormRegister] = useState(registerForm)
    const [formError, setFormError] = useState({});
    const navigate = useNavigate('');

    const validateForm = () => {
        const error = {};

        if (isEmptyRegister(formRegister.Password)) {
            error["Password"] = "";
        }
        if (isEmptyRegister(formRegister.Email)) {
            error["Email"] = "";
        }
        setFormError(error);
        return Object.keys(error).length === 0;
    };

    const handleEmail = (event) => {
        const { value } = event.target;
        setFormRegister({
            ...formRegister,
            Email: value,
        });
    };

    const handleUserName = (event) => {
        const { value } = event.target;
        setFormRegister({
            ...formRegister,
            UserName: value,
        })
    };

    const handlePassword = (event) => {
        const { value } = event.target;
        setFormRegister({
            ...formRegister,
            Password: value,
        });
    };

    const handleClickForm = (event) => {
        event.preventDefault()
        if (validateForm()) {
            navigate("/login");
            console.log("formValue", formRegister)
            alert('You have Register successfully logged ! ');
        } else {
            alert('This is an error alert - check it out')
        }
    }


    return (
        <div>
            <div>
                <div className='register-heading'>
                    <form action='' onSubmit={handleClickForm}>
                        <h1 className=''>Register</h1>
                        <div className="container">
                            <p className='singofLogin'>Please fill in this form to create an account.</p>
                            <hr></hr>

                            <label><b>Email</b></label>
                            <input type="text" value={formRegister.Email} onChange={handleEmail} placeholder="Enter Email" name="email" id="email" required />

                            <label><b>UserName</b></label><br></br>
                            <input type="username" value={formRegister.UserName} onChange={handleUserName} placeholder="username" id='password' name="username" required />
                            <br></br>
                            <label><b>Password</b></label>
                            <input type="password" value={formRegister.Password} onChange={handlePassword} placeholder="Password" name="psw-repeat" id="psw-repeat" required />
                            <hr></hr>
                            <p>By creating an account you agree to our <Link to=''>Terms & Privacy</Link>.</p>

                            <button type="submit" className="registerbtn" >Register</button>
                        </div>

                        <div className="container signin">
                            <p >Already have an account? <Link to=''>Sign in</Link>.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
