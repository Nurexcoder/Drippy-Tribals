import "./App.css";
import Home from "./pages/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
    const [user, setUser] = useState(true);
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route path='/Products/:categories'>
                    <ProductList />
                </Route>

                <Route path='/Product/:id'>
                    <Product />
                </Route>
                <Route path='/Cart/:id'>
                    <Cart />
                </Route>

                <Route path='/Login'>
                    {user ? <Redirect to='/' /> : <Login />}
                </Route>
                <Route path='/Register'>
                    {user ? <Redirect to='/' /> : <Register />}
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
