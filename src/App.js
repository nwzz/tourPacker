import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import Blog from './components/Blog/Blog';
import AboutUs from './components/AboutUs/AboutUs';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';
import AddTourPackage from './components/AddTourPackage/AddTourPackage';
import UpdatePackage from './components/UpdatePackage/UpdatePackage';

function App() {
  return (

    <div className="App ">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route path='/home/'>
              <Home></Home>
            </Route>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path="/login/">
              <Login></Login>
            </Route>


            <PrivateRoute path="/blog/">
              <Blog></Blog>
            </PrivateRoute>

            <Route path="/about-us/">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/booking/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/booking/manageOrders/">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/booking/newPackage/">
              <AddTourPackage></AddTourPackage>
            </PrivateRoute>
            <PrivateRoute path="/booking/update/:id">
              <UpdatePackage></UpdatePackage>
            </PrivateRoute>
            <PrivateRoute exact path="/booking">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>


            <Route path="/register/">
              <Register></Register>
            </Route>

            <PrivateRoute exact path="/booking/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>

          

            



            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
