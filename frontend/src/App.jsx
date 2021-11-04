import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductList from './pages/ProductList'
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Pay from './pages/Pay'
import Success from './pages/Success'
function App() {
  return (
    <Router >
        <Switch>
          
          <Route path='/pay'>
              
              <Pay />

            </Route>
            <Route>

              <Success />

          </Route>
        </Switch>



        {/* <Home/>       */}
        {/* <ProductList/> */}
        {/* <Product/> */}
        {/* <Login/> */}
        {/* <Register/> */}
        {/* <Cart/> */}

    </Router>
  );
}

export default App;
