import './styles.scss';
import ProductCard from './components/ProductCard/index';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Catalog = () => {
    //quando o componente iniciar buscar a lista de produto


    //quando a lista de produtos estiver disponpível popular um estado no componente e listar os produtos dinamicamente

    useEffect(()=>{
        fetch('http://localhost:3000/products')
            .then(Response => Response.json())
            .then(response => console.log(response))
        ;
    }, []);

    return(
        <div className="catalog-container">
            <h1 className="catalog-title">
                Catalogo de produtos
            </h1>
            <div className="catalog-prducts">
                <Link to="/products/1"><ProductCard /></Link>
                <Link to="/products/2"><ProductCard /></Link>
                <Link to="/products/3"><ProductCard /></Link>
                <Link to="/products/4"><ProductCard /></Link>
                <Link to="/products/5"><ProductCard /></Link>
                <Link to="/products/6"><ProductCard /></Link>
                <Link to="/products/7"><ProductCard /></Link>
                <Link to="/products/8"><ProductCard /></Link>
                <Link to="/products/9"><ProductCard /></Link>
                <Link to="/products/10"><ProductCard /></Link>
                <Link to="/products/11"><ProductCard /></Link>
                <Link to="/products/12"><ProductCard /></Link>
            </div>
        </div>
    )
}


export default Catalog;