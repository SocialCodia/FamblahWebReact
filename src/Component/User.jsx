import React from 'react';
import {NavLink} from 'react-router-dom';
import mufazmi from '../img/mufazmi.jpg';

const User = () =>
{
    return(
        <>
            <div className="col l2 m3 s6">  
                <div className="card hoverable" style={{borderRadius: '20px 20px 0px 0px', borderTop: '10px solid blue', borderRight: '1px solid blue', borderLeft: '1px solid blue'}}>
                    <div className="" style={{padding: '20px 20px 0px 20px'}}>
                        <img style={{ border: '3px solid blue', width:'160px', height:'150px', objectFit:'cover'}} src={mufazmi} alt="" className="z-depth-1 circle responsive-img"/>
                    </div>
                    <b><p className="center" style={{marginTop: '0px'}}>Umair Farooqui</p></b>
                    <p className="center" style={{marginTop: '-15px'}}><NavLink to="/$user->username">@mufazmi</NavLink></p>
                    <div className="card-saction center">
                    <NavLink to="/$user->username" className="btn blue" style={{width: '100%'}}>Visit Profile</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;