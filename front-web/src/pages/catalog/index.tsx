import './styles.scss';
import ProductCard from './components/ProductCard/index';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../core/utils/request';
import { ProductsResponse } from '../../core/types/Product';

const Catalog = () => {
    //quando a lista de produtos estiver disponpível popular um estado no componente e listar os produtos dinamicamente
    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();

    console.log(productsResponse);

    //quando o componente iniciar buscar a lista de produto
    useEffect(()=>{
        const params = {
            page: 0,
            linesPerPage: 12
        }
        
        makeRequest({ url:'/products', params  })
            .then(response => setProductsResponse(response.data));
    }, []);

    return(
        <div className="catalog-container">
            <h1 className="catalog-title">
                Catalogo de produtos
            </h1>
            <div className="catalog-prducts">
                {productsResponse?.content.map(product => (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>
        </div>
    )
}


export default Catalog;