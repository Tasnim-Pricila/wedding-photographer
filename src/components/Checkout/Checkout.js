import { useParams } from 'react-router-dom';
import useServices from '../../CustomHook/useServices';

const Checkout = () => {
    const [services] = useServices('https://tasnim-pricila.github.io/json-api/services.json');
    const {serviceId} = useParams();    
    const found = services.find(service => service.id == serviceId)

    return (
        <div>
            <p>Service: {serviceId} </p>
            <p>{found?.title}</p>
            
        </div>
    );
};

export default Checkout;