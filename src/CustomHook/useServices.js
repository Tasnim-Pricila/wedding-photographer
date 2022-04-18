import { useEffect, useState } from "react";

const useServices = (url) => {
    const [services, setServices] = useState([]);
    
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then (data => setServices(data));
    },[])

    const [gallery, setGallery] = useState([]);
    
    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then (data => setGallery(data));
    },[])

    return [services, setServices, gallery, setGallery];
};

export default useServices;