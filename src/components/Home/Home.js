import useServices from '../../CustomHook/useServices';
import Gallery from '../Gallery/Gallery';
import Service from '../Service/Service';
import './Home.css';


const Home = () => {
    const [services] = useServices('services.json');
    const [gallery] = useServices('gallery.json');

    return (
        <>
            <div className='banner'>
                <div className='text-white flex flex-col justify-center items-center h-full leading-10 z-50 max-w-full'>
                    <p className='text-6xl capitalize my-4 mb-6 text-center'>make your Wedding event memorable</p>
                    <p className='text-2xl capitalize md:tracking-widest tracking-wide'>Priceless Event of your life</p>
                   <a href ='#gallery'>
                    <button className='border border-fuchsia-700 my-6 py-2 px-6 font-medium uppercase hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500 tracking-widest' >See Photos</button>
                    </a>
                </div>
            </div>
            <section className='services my-12 px-12 pt-8'>
                <h2 className='text-3xl text-center uppercase tracking-wider'>My Services</h2>
                <p className='text-base text-center text-fuchsia-700 mt-2 mb-8 font-semibold tracking-wide'>What I Love Doing...</p>
                <div className='flex gap-10 flex-wrap md:flex-nowrap'>
                    {
                        services.map(service =>
                            <Service
                                key={service.id}

                                service={service}
                            > </Service>
                        )
                    }
                </div>

            </section>
            <section id="gallery">
                <h2 className='text-3xl text-center uppercase tracking-wider mt-4'>Style of Wedding</h2>
                <p className='text-base text-center text-fuchsia-700 mt-2 mb-8 font-semibold tracking-wide'>Professional Photographies...</p>
                <div className='grid md:grid-cols-3 grid-cols-1 my-8'>
                    {
                        gallery.map(photos => 
                        <Gallery
                            key ={photos.id}
                            photos={photos}>

                        </Gallery>)
                    }
                    
                </div>
            </section>

        </>
    );
};

export default Home;