import "./App.css";
import Home from "./pages/Home";
import {
    BrowserRouter as Router,
    Route,
    Navigate,
    Routes,
} from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
    const [user, setUser] = useState(false);
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Home />} />

                <Route path='/Products/:categories' element={<ProductList />} />

                <Route path='/Product/:id' element={<Product />} />
                <Route path='/Cart/:id' element={<Cart />} />
                <Route
                    path='/Login'
                    element={user ? <Navigate to='/' /> : <Login />}
                />
                <Route
                    path='/Register'
                    element={user ? <Navigate to='/' /> : <Register />}
                />
            </Routes>
        </Router>
    );
}

export default App;
