import { Switch, Route } from 'react-router-dom';
import List from './List/index';
import Form from './Form';

const Products = () => {
    return(
        <div>
            <Switch>
                <Route path="/admin/products" exact>
                    <List />
                </Route>
                <Route path="/admin/products/create">
                    <Form />
                </Route>
                <Route path="/admin/products/:productId">
                    <h1>Editar um produto</h1>
                </Route>
            </Switch>
        </div>
    );
}


export default Products;