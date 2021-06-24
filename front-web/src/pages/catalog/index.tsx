import './styles.scss';
import ProductCard from './components/ProductCard/index';

const Catalog = () => {
    return(
        <div className="catalog-container">
            <h1 className="catalog-title">
                Catalogo de produtos
            </h1>
            <div className="catalog-prducts">
                <ProductCard />
            </div>
        </div>
    )
}


export default Catalog;