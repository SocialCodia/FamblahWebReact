import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Sidenav from './Component/Sidenav';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Friends from './Pages/Friends';
import Gallery from './Pages/Gallery';
import Video from './Pages/Video';
import Users from './Pages/Users';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () =>
{
  return(
    <>
        <Navbar/>
        <Sidenav/>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/friends" component={Friends}/>
      <Route exact path="/images" component={Gallery}/>
      <Route exact path="/videos" component={Video}/>
      <Route exact path="/users" component={Users}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
    </Switch>
    </>
  )
}

export default App;