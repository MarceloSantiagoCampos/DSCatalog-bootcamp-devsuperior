import './styles.scss';
import ProductCard from './components/ProductCard/index';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { makeRequest } from 'core/utils/request';
import { ProductsResponse } from 'core/types/Product';
import Pagination from 'core/components/Pagination';
import ProductCardLoader from './components/Loaders/ProductCardLoader';


const Catalog = () => {
    //quando a lista de produtos estiver disponpível popular um estado no componente e listar os produtos dinamicamente
    const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    

    //quando o componente iniciar buscar a lista de produto
    useEffect(()=>{
        const params = {
            page: activePage,
            linesPerPage: 12
        }

        //iniciar o loader
        setIsLoading(true);
        makeRequest({ url:'/products', params  })
            .then(response => setProductsResponse(response.data))
            .finally(() => {
                //finalizar o loader
                setIsLoading(false);
            })        
     }, [activePage]);

    return(
        <div className="catalog-container">
            <h1 className="catalog-title">
                Catalogo de produtos
            </h1>
            <div className="catalog-prducts">
                {isLoading ? <ProductCardLoader /> : (
                    productsResponse?.content.map(product => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <ProductCard product={product} />
                        </Link>
                    ))
                )}      
            </div>
            {productsResponse && (
                <Pagination 
                    totalPages={productsResponse.totalPages} 
                    activePage={activePage}
                    onChange={page => setActivePage(page)}
                />
            )}
        </div>
    )
}


export default Catalog;