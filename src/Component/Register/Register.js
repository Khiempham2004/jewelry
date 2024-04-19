import React, { useState } from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';


const registerForm = {
    email: "",
    username: "",
    password: ""
}
const isEmptyRegister = (value) => {
    return !value || value.trim().length < 1;
}

const Register = () => {
    const [register, setRegister] = useState(registerForm)
    const [formRrror, setFormError] = useState({})
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const validateFormRegister = () => {
        const error = {};

        if (isEmptyRegister(register.email)) {
            error["Email"] = "";
        }
        if (isEmptyRegister(register.password)) {
            error["Password"] = "";
        }
        setFormError(error)
        return Object.keys(error).length === 0;
    };

    const handleEmail = (event) => {
        const { value } = event.target;
        setRegister({
            ...register,
            email: value,
        });
    };
    const handleUsername = (event) => {
        const { value } = event.target;
        setRegister({
            ...register,
            username: value,
        });
    };

    const handlePassword = (event) => {
        const { value } = event.target;
        setRegister({
            ...register,
            password: value,
        });
    };

    const handleClickFormRegister = (event) => {
        event.preventDefault();
        if (validateFormRegister()) {
            navigate('/login')
            console.log('formRegister :>>', register);
            alert("You have Register successfully logged ! ")
        } else {
            alert("This is an error alert - check it out! ")
        }
    }


    return (
        <div>
            <div>
                <div className='register-heading'>
                    <form action='' onChange={handleClickFormRegister}>
                        <h1 className=''>Register</h1>
                        <div className="container">
                            <p className='singofLogin'>Please fill in this form to create an account.</p>
                            <hr></hr>

                            <label><b>Email</b></label>
                            <input type="text" onChange={handleEmail} value={register.email} placeholder="Enter Email" name="email" id="email" required />

                            <label><b>UserName</b></label><br></br>
                            <input type="username" onChange={handleUsername} value={register.username} placeholder="username" id='password' name="username" required />
                            <br></br>
                            <label><b>Password</b></label>
                            <input type="password" onChange={handlePassword} value={register.password} placeholder="Password" name="psw-repeat" id="psw-repeat" required />
                            <hr></hr>
                            <p>By creating an account you agree to our <a href="/">Terms & Privacy</a>.</p>

                            <button type="submit" className="registerbtn" >Register</button>
                        </div>

                        <div className="container signin">
                            <p >Already have an account? <a href="/">Sign in</a>.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
