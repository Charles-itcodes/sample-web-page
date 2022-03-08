import React, { Fragment } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import AdminComponent from './AdminComponent';

const UserRouter = () => {
    return (
        <Fragment>
                <div className='container'>
                    <Router>
                        <Header/>
                        <Switch>
                            <Route exact path="/" component={Welcome}/>
                            <Route path="/home" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/signup" component={SignUp}/>
                            <Route path="/signin" component={SignIn}/>
                            <Route path="/admin" component={AdminComponent}/>
                        </Switch>
                    </Router>
                </div>
        </Fragment>
       
    );
};
const Welcome=()=><h5>Welcome Page</h5>
const Home=()=><h5>Home Page</h5>
const About=()=><h5>About Us Page</h5>
const Contact=()=><h5>Contact Us Page</h5>

const SignUp=()=>
            <div class="container ">         
                <div class="col-xs-12 col-sm-10 offset-sm-1 p-sm-5 ">
                    <form className='form-control m-2 p-3'>
                        <div class="panel-body text-center text-black"><h4 class="flexi shadow border-b">USER REGISTRATION FORM</h4></div>
                             <div class="row mb-3 ">
                                <div class="col-sm-9 m-auto"><input type="text" placeholder="Enter FirstName" class="form-control" /></div>
                            </div>
                             <div class="row mb-3 ">
                               <div class="col-sm-9 m-auto"><input type="text" placeholder="Enter LastName" class="form-control" /></div>
                             </div>
                             <div class="row mb-3">
                                   <div class="col-sm-9 m-auto"><input type="text" placeholder="Enter Email" class="form-control" /></div>
                             </div>
                             <div class="row mb-3">
<                                  div class="col-sm-9 m-auto"><input type="password" class="form-control" placeholder="Enter password"/></div>
                            </div>
                            <div class="row mb-3">
                                        <div class="col-sm-2 m-auto"><button type="submit" class="btn btn-success btn-block">Submit</button></div>
                            </div>
                    </form>	
                </div>
            </div>


const SignIn=()=>
<div class="container">
<div class="row ">
    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin m-5">
            <div class="card-body">
                <h5 class="card-title text-center">Sign in</h5>
                <form class="form-signin ">
                    <div class="form-label-group">
                        <input type="text" id="email" name="email"
                            placeholder="Enter Email" class="form-control m-1" /> 
                    </div>
                    <div class="form-label-group">
                        <input type="password" placeholder="Enter Password" id="password"
                            name="password" class="form-control m-1"/>  
                    </div>
                    <div class="custom-control custom-checkbox mb-3">
                        <input type="checkbox" class="custom-control-input"
                            id="customCheck1"/>
                             <label class="custom-control-label"
                            for="customCheck1">Remember password</label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block text-uppercase"
                        type="submit">Sign in</button>
                         <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
                         <p>Don't have an account? <a href="/signup" class="link-primary">Register here</a></p>
                </form>
            </div>
        </div>
    </div>
</div>
</div>



const Header=()=>{
    return (
        <Fragment>
            <nav className='navbar navbar-expand-sm navbar-blue bg-blue flexi shadow border-b'>
                <div className='container-fluid'>
                    <ul className='navbar-nav me-auto'>
                        <li className='nav-item'>
                        <Link className="navbar-brand" to="/">
                         <img src='logo-white.jpg'width="40" alt=''/></Link>  
                        </li>
                        <li className='nav-item'>
                            <Link className="navbar-brand" to="/home" >Home </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="navbar-brand" to="/about" >About Us </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="navbar-brand" to="/contact" >Contact Us </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="navbar-brand"  to="/signup" >Sign Up </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className="navbar-brand" to="/signin" >Sign in</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
};

export default UserRouter;