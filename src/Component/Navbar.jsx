import React from 'react';
import { NavLink } from 'react-router-dom';
import menu from '../icons/menu.png';
import home from '../icons/home.png';
import bell from '../icons/bell.svg';
import chat from '../icons/chat.png';
import mufazmi from '../img/mufazmi.jpg';

const Navbar = () =>
{
    return(
        <>
            <div className="navbar-fixed" style={{zIndex:'9999'}}>
                <nav className="white darken-1">
                        <NavLink to="home" className="brand-logo blue-text hide-on-med-and-down" style={{marginLeft:'35px', fontWeight:'bold'}}>Famblah</NavLink>
                        <div className="row">
                            <div className="col s1 m4 l3">
                                <ul className="left">
                                    <li>     
                                        <NavLink to="/" className="sidenav-trigger" data-target="slide-out" style={{margin:'0px'}}> 
                                            <i className="material-icons black-text"><img src={menu} width="25" alt="asd"/></i> 
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>

                            <div className="col s12 m4 l5 hide-on-med-and-down">
                                    <div className="input-field">
                                        <input className="blue lighten-5" style={{borderRadius: '30px', paddingLeft: '50px', height:'40px', width:'100%'}} type="text" name="search" id="search" placeholder="Search for Friends , Videos and more.."/>
                                        <i className="material-icons blue-text prefix right" style={{marginTop:'-8px'}}>search</i>
                                    </div>
                            </div>
                            
                            <div className="col s11 m4 l4">
                                <ul className="right">
                                    <div className="row" style={{marginBottom:'0px'}}>
                                        <div className="col s12">
                                            <div className="col s3 l2 ">
                                                <li><NavLink to="home"><i className="material-icons large tooltipped" data-position="bottom" data-tooltip="Home"><img src={home} width="25" alt=""/></i></NavLink></li>
                                            </div>
                                            <div className="col s3 l2">
                                                <li><NavLink to="/"><i className="material-icons large tooltipped" data-position="bottom" data-tooltip="Message"><img src={chat} width="25" alt=""/></i></NavLink></li>
                                            </div>
                                            <div className="col s3 l2">
                                                <li><NavLink to="/" className="dropdown-trigger tooltipped" data-target="notificationDropdown" data-position="bottom" data-tooltip="Notification"><i className="material-icons large "><img src={bell} width="25" alt=""/></i></NavLink></li>
                                            </div>
                                            <div className="col s3 l2">
                                                <li><NavLink to="/" className="dropdown-trigger" data-target="profileMoreDropdown" data-tooltip="Profile"><i className="material-icons large "><img src={mufazmi} className="circle"  style={{ border: '1px solid blue', width: '30px', height: '30px', objectFit: 'cover'}} alt="a"/></i></NavLink></li>
                                            </div>
                                            <div className="col s3 l4">
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;