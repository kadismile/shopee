import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/header'
import MenCollection from './pages/men-collection';
import LandingPage from './pages/landing-page';

import AdminLogin from './pages/admin/login';
import AdminProfile from './pages/admin/profile';
import AdminSignUp from './pages/admin/signup';
import DeleteProducts from './pages/admin/deleteProduct';
import HeaderAdmin from './pages/admin/header';
import AddProducts from './pages/admin/addProduct';
import UpdateProducts from './pages/admin/updateProducts';
import Admin from './pages/admin';


const MemberRoutes = () => (
    <>
        <HeaderAdmin />
        <Route path='/admin/profile' component={AdminProfile} />
        <Route path='/admin/deleteProducts' component={DeleteProducts} />
        <Route path='/admin/addProducts' component={AddProducts} />
        <Route path='/admin/updateProducts' component={UpdateProducts} />
        <Route path="/admin" component={Admin} />
    </>
);

export default function Routerr() {
    return (
        <Router>
            <div className="container-fluid">
                <Header />
                <Route exact path="/" component={LandingPage} />
                <Route exact path='/men-collection' component={MenCollection} />
                <Route path="/admin" component={MemberRoutes} />
                <Route path='/login' component={AdminLogin} />
                <Route path='/signup' component={AdminSignUp} />
                {/* <Route exact path='/signup' component={SignUp} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/account' component={Account} />
                {/* <Route exact path = '/games' component = {Games}/> */}
                {/* <Route exact path='/lotto' component={Lotto} /> */}
                {/* <Route exact path='/confirmEmail' component={ConfirmEmail} /> */}
                {/* <Route exact path='/checkResults' component={Result} /> */}

                {/* <Route exact path = "/club/editClub" render ={(props) => <EditClub {...props}/>}/> */}
            </div>
        </Router>
    )
}