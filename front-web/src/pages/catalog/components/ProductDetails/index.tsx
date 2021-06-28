import { useParams } from 'react-router-dom';
import './styles.scss';

type ParamsType = {
    productId: string;
}

const ProducDetails = () => {
    const  { productId } = useParams<ParamsType>();
    
    return (
        <div className="product-details-container">
            <h1>Product Details</h1>
        </div>
    );

};


export default ProducDetails;