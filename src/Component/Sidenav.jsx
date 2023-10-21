import React from 'react';
import {NavLink} from 'react-router-dom';
import mufazmi from '../img/mufazmi.jpg';
import home from '../icons/home.png';
import friends from '../icons/friends.png';
import photo from '../icons/photo.png';
import video from '../icons/video.png';
import group from '../icons/group.png';
import info from '../icons/info.png';
import contact from '../icons/contact_us.png';

const Navbar = () =>
{
    return(
        <>
            <ul id="slide-out" className="sidenav collapsible sidenav-fixed z-depth-0" style={{top:'55px', fontWeight:'bold'}}>
                <li><NavLink to="/profile"><i className="material-icons"><img src={mufazmi} width="25" className="circle" alt=""/></i> Profile</NavLink></li>
                <li><NavLink to="/home"><i className="material-icons"><img src={home} width="25" alt=""/></i> Feed</NavLink></li>
                <li><NavLink to="/friends"><i className="material-icons"><img src={friends} width="25" alt=""/></i> Friends</NavLink></li>
                <li><NavLink to="/images"><i className="material-icons"><img src={photo} width="25" alt=""/></i> Gallery</NavLink></li>
                <li><NavLink to="/videos"><i className="material-icons"><img src={video} width="25" alt=""/></i> Video</NavLink></li>
                <li><NavLink to="/users"><i className="material-icons"><img src={group} width="25" alt=""/></i> Users</NavLink></li>
                <div className="divider"></div>
                <li><NavLink to="/logout"><i className="material-icons">logout</i>Logout</NavLink></li>
                <li><NavLink to="/about"><i className="material-icons"><img src={info} width="25" alt=""/></i>About Us</NavLink></li>
                <li><NavLink to="/contact"><i className="material-icons"><img src={contact} width="25" alt=""/></i>Contact Us</NavLink></li>
            </ul>
        </>
    )
}

export default Navbar;