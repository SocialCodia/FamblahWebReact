import Axios from 'axios';
import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../img/icon_.png';
import imageLogin from '../img/otp_screen_image.png';


const Login = () =>
{

    const [authData, setAuthData] = useState({email:'',password:''});
    const [message,setMessage] = useState('');

    const InputEvent = (e) =>
    {
        const {name,value} = e.target;
        setAuthData((old)=>{
            return{
                ...old,
                [name]:value
            }
        });
    }

    const onSubmit = async (e) =>
    {
        e.preventDefault();
        console.log(authData);
        const res = await Axios.post("http://socialcodia.net/SocialApiFriendsSystemVideoThumb/public/login",{'email':authData.email,'password':authData.password});
        checkRes(res.data);
    }

    const checkRes = (res) =>
    {
        if (res.error)
            setMessage(res.message);
        else
            setLocaleStorage(res);
    }

    const setLocaleStorage = (res) =>
    {
        localStorage.setItem('user',res.user);
        console.log(res.user);
    }

    return(
        <>
            <div className="row">
                <div className="col l6 offset-l3 m6 offset-m3 s12">
                    <div className="card" style={{borderRadius: '20px', padding: '30px', marginTop: '80px'}}>
                        <div className="row">
                            <div className="col l6 s12 center-align" style={{padding: '30px'}}>
                                <img src={logo} className="responsive-img" width="130" alt="a"/>
                                <p style={{fontWeight: 'bold', marginTop: '40px', marginBottom: '40px'}}>Social Ui helps you to connect and share with people in your life.</p>
                                <img src={imageLogin} style={{width: '85%'}} alt="a" className="responsive-img"/>
                            </div>
                            <div className="col l6 s12" style={{padding: '15px'}}>
                                <h5 style={{fontWeight: 'bold'}}>Login</h5>
                                <p className="grey-text" style={{ marginBottom: '30px'}}>Login into your account to continue...</p>
                                <p className="red-text center-align"><b>{message}</b></p>
                                <form  onSubmit={onSubmit}>
                                    <div className="input-field">
                                        <i className="material-icons prefix red-text">email</i>
                                        <input type="text" onChange={InputEvent} name="email" id="email"/>
                                        <label for="email">Email Address</label>
                                    </div>
                                    <div className="input-field">
                                        <i className="material-icons prefix red-text">lock</i>
                                        <input type="password" onChange={InputEvent} name="password" id="password"/>
                                        <label for="password">Password</label>
                                    </div>
                                    <p className="right-align" style={{marginTop: '-13px'}}><NavLink to="forgotPassword.html">Forgot Password?</NavLink></p>
                                    <div className="input-field">
                                        <input className="btn red" style={{borderRadius: '20px', height: '50px', width:'105px'}} value="Login" type="submit" name="login" id="login"/>
                                    </div>
                                </form>
                                <p className="center" style={{marginTop:'30px'}}>Don't have an account? <NavLink to="register.html"><b>Register</b></NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;