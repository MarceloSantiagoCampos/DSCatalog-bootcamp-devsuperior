import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Admin from './pages/admin';
import Catalog from './pages/catalog';
import Home from './pages/home';
import ProducDetails from './pages/catalog/components/ProductDetails/index';


const Routes = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/products" exact>
                    <Catalog />
                </Route>
                <Route path="/products/:productId">
                    <ProducDetails />
                </Route>
                <Redirect from="/admin" to="/admin/products" exact/>
                <Route path="/admin">
                    <Admin />
                </Route>
            </Switch>
        </BrowserRouter>

    )
}

export default Routes;